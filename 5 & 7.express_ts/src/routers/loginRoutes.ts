import { Router, Request, Response } from "express";

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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

router.post("/login", (req: RequestBody, res: Response) => {
  const { email, password } = req.body;

  if (email) {
    res.send(email.toUpperCase());
  } else res.send("Please provide email with name property ");
});

export default router;
