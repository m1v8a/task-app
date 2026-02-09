export default class PubSub {
  static #events = {};

  static sub(event, fn) {
    if (!this.#events[event]) {
      this.#events[event] = [];
    }
    if (Array.isArray(fn)) {
      fn.forEach((f) => this.#events[event].push(f));
    } else {
      this.#events[event].push(fn);
    }
  }

  static pub(event, ...args) {
    if (!this.#events[event]) console.warn(`Event: ${event}, does not exist`);
    const returnValues = [];
    this.#events[event].forEach((fn) => {
      returnValues.push(fn(...args));
    });
    return returnValues;
  }

  static subscriptions(events) {
    for (const key in events) {
      this.sub(key, events[key]);
    }
  }
}
