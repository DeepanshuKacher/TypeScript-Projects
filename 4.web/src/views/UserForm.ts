import Users, { userData } from "../models/Users";
import View from "./View";

export default class UserForm extends View<Users, userData> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.setAge,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  setAge = (): void => {
    this.model.setRandomeAge();
  };

  tamplate(): string {
    return `
      <div>
        <input  placeholder="${this.model.get("name")}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Randome Age</button>
        <button class="save-model">Save User</button>
      </div>
      `;
  }
}
