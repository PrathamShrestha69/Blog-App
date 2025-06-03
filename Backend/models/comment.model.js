import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    posts: {
      type: Schema.Types.ObjectId,
      ref: "Posts",
      reuired: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      reuired: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
