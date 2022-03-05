import Model from "./Model";
import Attributes from "./Attributes";
import Sync from "./Sync";
import Eventing from "./Eventing";
import Collection from "./Collection";

export interface userData {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export default class Users extends Model<userData> {
  static bildUser(attri: userData): Users {
    return new Users(
      new Eventing(),
      new Sync<userData>(rootUrl),
      new Attributes<userData>(attri)
    );
  }

  static bildCollection() {
    return new Collection<Users, userData>(rootUrl, (props: userData) =>
      Users.bildUser(props)
    );
  }

  setRandomeAge(): void {
    const newAge = Math.round(Math.random() * 100);
    this.set({ age: newAge });
  }
}
