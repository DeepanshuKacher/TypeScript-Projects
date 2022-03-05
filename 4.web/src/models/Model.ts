import { AxiosPromise, AxiosResponse } from "axios";

interface ModerAttribute<T> {
  get<K extends keyof T>(propName: K): T[K];
  set(newData: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export default class Model<T extends HasId> {
  constructor(
    private event: Events,
    private sync: Sync<T>,
    private attri: ModerAttribute<T>
  ) {}

  on = this.event.on;

  trigger = this.event.trigger;

  get = this.attri.get;

  set(data: T): void {
    this.attri.set(data);
    this.trigger("change");
  }
  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
  save = (): void => {
    this.sync
      .save(this.attri.getAll())
      .then((result: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch((): void => {
        this.trigger("error");
      });
  };
}
