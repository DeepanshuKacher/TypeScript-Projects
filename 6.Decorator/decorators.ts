class Boat {
  color: string = "red";

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("this is maked error")
  pilot(): void {
    throw new Error();
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
