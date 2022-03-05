import CollectionView from "./CollectionView";
import Users, { userData } from "../models/Users";
import UserShow from "./UserShow";

export default class UserList extends CollectionView<Users, userData> {
  renderItem(itsParent: Element, model: Users): void {
    // new UserShow(itsParent, model).render();
    const template = document.createElement("template");
    template.innerHTML = `<h1>This is hello</h1>`;
    itsParent.append(template.content);
  }
}
