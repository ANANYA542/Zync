/**
 * Strategy Pattern - Conflict Resolution
 * ----------------------------------------
 * Different strategies can be swapped to change how scheduling conflicts
 * are detected. The ScheduleService uses one of these strategies at runtime.
 *
 * Strategies:
 * - StrictConflictStrategy: any time overlap = conflict
 * - LenientConflictStrategy: only full overlap = conflict (15 min buffer)
 */

class StrictConflictStrategy {
    /**
     * Returns true if two events overlap AT ALL.
     * @param {Date} startA
     * @param {Date} endA
     * @param {Date} startB
     * @param {Date} endB
     */
    hasConflict(startA, endA, startB, endB) {
        return startA < endB && endA > startB;
    }

    describe() {
        return 'strict';
    }
}

class LenientConflictStrategy {
    /**
     * Returns true only if both events fully overlap (no buffer tolerance).
     * Allows events that just touch edge-to-edge.
     */
    hasConflict(startA, endA, startB, endB) {
        const BUFFER_MS = 15 * 60 * 1000; // 15 min buffer
        return startA < endB - BUFFER_MS && endA > startB + BUFFER_MS;
    }

    describe() {
        return 'lenient';
    }
}

module.exports = { StrictConflictStrategy, LenientConflictStrategy };
