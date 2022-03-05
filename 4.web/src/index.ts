import UserList from "./views/UserList";
import Collection from "./models/Collection";
import Users, { userData } from "./models/Users";

const users = new Collection(
  "http://localhost:3000/users",
  (json: userData) => {
    return Users.bildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }

  console.log(users);
});

users.fetch();
