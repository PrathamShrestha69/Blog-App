import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import ImageKit from "imagekit";

export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).send(posts);
};

export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  res.status(200).send(post);
};

export const createPost = async (req, res) => {
  const clerkUserId = req.auth.userId;
  if (!clerkUserId) {
    return res.status(200).json("Not authenticated");
  }

  const user = await User.findOne({ clerkUserId });

  if (!user) {
    return res.status(404).json("User not found");
  }

  let slugBase = req.body.title.replace(/ /g, "-").toLowerCase();
  let slug = slugBase;

  let existingPost = await Post.findOne({ slug });
  let counter = 2;

  while (existingPost) {
    slug = `${slugBase}-${counter}`;
    existingPost = await Post.findOne({ slug });
    counter++;
  }

  const newPost = new Post({ user: user._id, slug, ...req.body });

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

const imagekit = new ImageKit({
  urlEndpoint: process.env.YOUR_IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};
