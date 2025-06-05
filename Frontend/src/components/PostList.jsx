import React from "react";
import PostListItem from "./PostListItem";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
};

const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);

  return (
    <div>
      <div className="flex flex-col gap-12 mb-18">
        <PostListItem />
      </div>
    </div>
  );
};

export default PostList;
