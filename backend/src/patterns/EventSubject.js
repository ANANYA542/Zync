/**
 * Observer Pattern Implementation
 * -----------------------------------
 * EventSubject acts as the "publisher".
 * Observers register themselves and are notified when a new event occurs.
 * This decouples business logic from side-effects like notifications.
 */

class EventSubject {
    constructor() {
        this._observers = [];
    }

    /**
     * Register an observer implementing the { update(event) } interface.
     */
    subscribe(observer) {
        this._observers.push(observer);
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => obs !== observer);
    }

    /**
     * Notify all observers with the newly created event.
     * Polymorphism: each observer's update() behaves differently.
     */
    async notify(event) {
        for (const observer of this._observers) {
            await observer.update(event);
        }
    }
}

module.exports = new EventSubject();
