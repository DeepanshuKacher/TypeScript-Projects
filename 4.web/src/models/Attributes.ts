export default class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };

  set(newData: T): void {
    Object.assign(this.data, newData);
  }
  getAll(): T {
    return this.data;
  }
}
