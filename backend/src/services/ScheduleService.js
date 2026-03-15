const eventRepository = require('../repositories/EventRepository');
const eventSubject = require('../patterns/EventSubject');
const deadlineObserver = require('../patterns/DeadlineNotificationObserver');
const { StrictConflictStrategy } = require('../patterns/ConflictStrategy');

// Register the deadline observer once at startup
eventSubject.subscribe(deadlineObserver);

/**
 * ScheduleService - manages events, conflict detection, and scheduling.
 *
 * Demonstrates:
 * - Strategy Pattern: conflict detection strategy is injected/swappable.
 * - Observer Pattern: on event creation, eventSubject notifies all observers.
 * - Abstraction: conflict logic is delegated to the strategy, not hardcoded.
 */
class ScheduleService {
    _resolveStrategy(strictMode) {
        if (strictMode === false) {
            const { LenientConflictStrategy } = require('../patterns/ConflictStrategy');
            return new LenientConflictStrategy();
        }
        return new StrictConflictStrategy();
    }

    /**
     * Create a new event.
     * Before saving, we check for conflicts using the active strategy.
     * After saving, we notify all observers (Observer Pattern).
     */
    async createEvent(data, options = {}) {
        const { participants = [], startTime, endTime } = data;
        const conflictStrategy = this._resolveStrategy(options.strictMode);

        // Check conflicts for each participant
        const conflicts = [];
        for (const userId of participants) {
            const overlapping = await eventRepository.findOverlappingEvents(userId, new Date(startTime), new Date(endTime));
            const conflicting = overlapping.filter(existing =>
                conflictStrategy.hasConflict(
                    new Date(startTime), new Date(endTime),
                    new Date(existing.startTime), new Date(existing.endTime)
                )
            );
            if (conflicting.length > 0) {
                conflicts.push({ userId, conflictingEvents: conflicting.map(e => e.title) });
            }
        }

        if (conflicts.length > 0) {
            const err = new Error('Schedule conflict detected');
            err.conflicts = conflicts;
            err.strategyUsed = conflictStrategy.describe();
            throw err;
        }

        // Save the event
        const event = await eventRepository.create({
            ...data,
            startTime: new Date(startTime),
            endTime: new Date(endTime)
        });

        // Notify all observers (e.g., DeadlineNotificationObserver)
        await eventSubject.notify(event);

        return event;
    }

    /**
     * Get all upcoming events for a user.
     */
    async getUpcomingEvents(userId) {
        return await eventRepository.getUpcomingEvents(userId);
    }

    /**
     * Calculate a workload score for a user based on upcoming events density.
     * Polymorphic behavior: Students count all types; Teachers only count lectures/exams.
     */
    async getWorkloadScore(userId, role) {
        const events = await eventRepository.getUpcomingEvents(userId);
        let relevantEvents = events;

        if (role === 'teacher') {
            relevantEvents = events.filter(e => ['lecture', 'exam'].includes(e.type));
        }

        // Simple scoring: more events = higher workload
        const score = Math.min(relevantEvents.length * 10, 100);
        return {
            workloadScore: score,
            eventCount: relevantEvents.length,
            level: score >= 80 ? 'high' : score >= 40 ? 'medium' : 'low'
        };
    }
}

module.exports = new ScheduleService();
