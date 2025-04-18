import React from "react";
import Image from "./Image";
import { Link } from "react-router";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block">
        <Image
          src="postImg.jpeg"
          className="rounded-2xl object-cover"
          w="875"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4">
        {/* title */}
        <Link to="/test " className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          consequuntur porro numquam aut.
        </Link>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Written by</span>
          <Link className="text-blue-400">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-400">WebDesign</Link>
          <span>2 Days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          repellendus, repudiandae, officia aut assumenda tenetur suscipit, quae
          doloribus provident laudantium dolore eveniet? Placeat a nobis
          consequatur aperiam voluptatibus aliquid ea.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
