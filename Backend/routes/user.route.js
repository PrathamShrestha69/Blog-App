import express from "express";

const userRouter = express.Router();

userRouter.get("/anothertest", (req, res) => {
  res.status(200).send("User route");
});

export default userRouter;
