import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema(
  {
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
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
