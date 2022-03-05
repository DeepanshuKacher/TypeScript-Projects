import express from "express";
import router from "./routers/loginRoutes";
import bodyParser from "body-parser";
const app = express();

// app.use(express.urlencoded()); ---This can also parse request

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on PORT 3000");
});
