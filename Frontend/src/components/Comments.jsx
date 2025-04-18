import React from "react";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <div className="flex items-center justify-between gap-9 w-full">
        <textarea
          placeholder="write your comments..."
          className="w-full p-4 rounded-xl"
        ></textarea>
        <button className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl ">
          send
        </button>
      </div>
    </div>
  );
};

export default Comments;
