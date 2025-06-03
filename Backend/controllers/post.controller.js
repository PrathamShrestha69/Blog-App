import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth().userId;
  if (!clerkUserId) {
    return res.status(200).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  const newPost = new Post({ user: user._id, ...req.body });

  const post = await newPost.save();
  res.status(200).send(post);
};

export const deletePost = async (req, res) => {
  const clerkUserId = req.auth().userId;
  if (!clerkUserId) {
    return res.status(200).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  const deletePost = await Post.findByIdAndDelete({
    _id: req.params.id,
    user: user._id,
  });

  if (!deletePost) {
    return res.status(403).json("You can delete only your posts");
  }

  res.status(200).send("Post has been deleted");
};
