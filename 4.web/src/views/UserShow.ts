import View from "./View";
import Users, { userData } from "../models/Users";

export default class UserShow extends View<Users, userData> {
  tamplate(): string {
    return `<div>
    <h1>User Detail</h1>
    <div>User Name: ${this.model.get("name")}</div>
    <div>User Age: ${this.model.get("age")}</div>
    </div>`;
  }
}
