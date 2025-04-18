import React from "react";
import PostListItem from "./PostListItem";

const PostList = () => {
  return (
    <div>
      <div className="flex flex-col gap-12 mb-18">
        <PostListItem />
      </div>
    </div>
  );
};

export default PostList;
