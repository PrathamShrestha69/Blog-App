import express from "express";

const commentRouter = express.Router();

commentRouter.get("/anothertest", (req, res) => {
  res.status(200).send("User route");
});

export default commentRouter;
