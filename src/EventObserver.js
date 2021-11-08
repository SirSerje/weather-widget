class EventObserver {
  constructor () {
    this.observers = [];
  }

  subscribe (fn) {
    this.observers.push(fn);
  }

  unsubscribe (fn) {
    this.observers = this.observers.filter(
      subscriber => subscriber !== fn
    );
  }

  broadcast (data) {
    if(this.observers && this.observers.length > 0) {
      this.observers.forEach(subscriber => subscriber(data));
    }
  }
}

export default EventObserver;

// you can implement observer even without classes!
function functionalObserver() {
  let observers = [];
  function subscribe (fn) {
    observers.push(fn);
  }

  function unsubscribe (fn) {
    observers = this.observers.filter(subscriber => subscriber !== fn);
  }

  function broadcast (data) {
    observers.forEach(subscriber => subscriber(data));
  }

  return ({
    subscribe, unsubscribe, broadcast
  });
}