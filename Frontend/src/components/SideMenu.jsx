import React from "react";
import Search from "./Search";
import { Link } from "react-router";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />

      {/* Filter */}
      <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-centergap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="newest"
            className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900"
          />{" "}
          Newest
        </label>
        <label htmlFor="" className="flex items-centergap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="mostPopular"
            className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900"
          />{" "}
          Most popular
        </label>
        <label htmlFor="" className="flex items-centergap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="trending"
            className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900"
          />{" "}
          Trending
        </label>
        <label htmlFor="" className="flex items-centergap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value="oldest"
            className="bg-white appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-900"
          />{" "}
          Oldest
        </label>
      </div>

      {/* Categories */}
      <h1 className="mt-8 mb-4 text-sm font-medium">Categoties</h1>
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex flex-col gap-2 text-sm">
          <Link className="underline" to="/posts">
            All
          </Link>
          <Link className="underline" to="/posts?cat=web-design">
            Web Design
          </Link>
          <Link className="underline" to="/posts?cat=development">
            Development
          </Link>
          <Link className="underline" to="/posts?cat=databases">
            Databases
          </Link>
          <Link className="underline" to="/posts?cat=seo">
            Search Engines
          </Link>
          <Link className="underline" to="/posts?cat=marketing">
            Marketing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
