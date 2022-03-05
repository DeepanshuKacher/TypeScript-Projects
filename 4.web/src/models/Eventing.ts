type Callback = () => void;

export default class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback) => {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  };
  trigger = (eventName: string): void => {
    if (this.events[eventName] && this.events[eventName].length > 0) {
      this.events[eventName].forEach((callback) => {
        callback();
      });
    }
  };
}
