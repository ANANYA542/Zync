class RecommendationStrategy {
    buildPlan() {
        throw new Error('buildPlan() must be implemented');
    }
}

class LastMinuteExamStrategy extends RecommendationStrategy {
    buildPlan({ upcomingExams, attendance, availableHoursPerDay = 3 }) {
        const prioritized = upcomingExams
            .map((exam) => {
                const attendanceState = attendance[exam.courseId] || { currentPercentage: 100 };
                const daysLeft = Math.max(1, Math.ceil((new Date(exam.startTime) - new Date()) / (1000 * 60 * 60 * 24)));
                const urgency = 100 / daysLeft;
                const attendancePenalty = attendanceState.currentPercentage < 75 ? 20 : 0;
                const priorityScore = Math.min(100, Math.round(urgency + attendancePenalty));
                return { ...exam, daysLeft, priorityScore };
            })
            .sort((a, b) => b.priorityScore - a.priorityScore);

        const plan = prioritized.map((exam, index) => ({
            order: index + 1,
            courseId: exam.courseId,
            examTitle: exam.title,
            daysLeft: exam.daysLeft,
            recommendedHoursPerDay: Math.max(1, Math.round((availableHoursPerDay * exam.priorityScore) / 100)),
            priorityScore: exam.priorityScore
        }));

        return { plan, readinessBand: plan.length > 0 ? 'needs_focus' : 'on_track' };
    }
}

module.exports = { RecommendationStrategy, LastMinuteExamStrategy };
