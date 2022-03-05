"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/login", (req, res) => {
    res.send(`
  <form method="POST">
   <div>
     <label>Email</label>
     <input name="email"/>
    </div>
    <div>
     <label>Password</label>
     <input name="pasord" type="password"/>
     </div>
     <button>Submit</button>
     </form>
  `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email) {
        res.send(email.toUpperCase());
    }
    else
        res.send("Please provide email with name property ");
});
exports.default = router;
