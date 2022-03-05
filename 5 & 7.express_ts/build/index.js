"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = __importDefault(require("./routers/loginRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// app.use(express.urlencoded()); ---This can also parse request
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(loginRoutes_1.default);
app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
});
