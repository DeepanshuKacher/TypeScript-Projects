import Eventing from "./Eventing";
import axios, { AxiosResponse } from "axios";
export default class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (props: K) => T) {}
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  fetch() {
    axios.get(this.rootUrl).then((result: AxiosResponse) => {
      result.data.forEach((element: K) => {
        this.models.push(this.deserialize(element));
      });
    });

    this.trigger("change");
  }
}
