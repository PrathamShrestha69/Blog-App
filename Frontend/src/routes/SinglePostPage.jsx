import React from "react";
import Image from "../components/Image";
import { Link, useParams } from "react-router";

import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { format } from "timeago.js";

const fetchPosts = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPosts(slug),
  });

  if (isPending) return "loading...";
  if (error) return "something went wrong..." + error.message;
  if (isPending) return "Post not foiund";
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex item-center gap-2 text-gray-500 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-500">{data.desc}</p>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5 ">
            <Image src={data.img} w="600" className="rounded-2xl " />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="flex flex-col gap-6">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ab
            alias et beatae consectetur fugiat, facilis culpa, omnis quidem
            delectus officiis quibusdam nam, natus minima! Placeat,
            necessitatibus? Cupiditate, quod odit. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ratione quis odit aut perferendis eum
            saepe doloribus eos facilis, quasi a neque quam quia quibusdam
            sequi? Commodi nisi pariatur omnis odio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit
            repudiandae unde iure tenetur sint esse quod ipsum odit, mollitia
            temporibus exercitationem voluptatem nam dignissimos. Necessitatibus
            doloremque perferendis fugiat quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora fugiat obcaecati nihil nam
            distinctio explicabo, iure porro officia minus rem impedit, officiis
            voluptates mollitia? Nobis assumenda fugiat unde facere ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit
            repudiandae unde iure tenetur sint esse quod ipsum odit, mollitia
            temporibus exercitationem voluptatem nam dignissimos. Necessitatibus
            doloremque perferendis fugiat quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora fugiat obcaecati nihil nam
            distinctio explicabo, iure porro officia minus rem impedit, officiis
            voluptates mollitia? Nobis assumenda fugiat unde facere ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit
            repudiandae unde iure tenetur sint esse quod ipsum odit, mollitia
            temporibus exercitationem voluptatem nam dignissimos. Necessitatibus
            doloremque perferendis fugiat quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora fugiat obcaecati nihil nam
            distinctio explicabo, iure porro officia minus rem impedit, officiis
            voluptates mollitia? Nobis assumenda fugiat unde facere ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit
            repudiandae unde iure tenetur sint esse quod ipsum odit, mollitia
            temporibus exercitationem voluptatem nam dignissimos. Necessitatibus
            doloremque perferendis fugiat quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora fugiat obcaecati nihil nam
            distinctio explicabo, iure porro officia minus rem impedit, officiis
            voluptates mollitia? Nobis assumenda fugiat unde facere ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit
            repudiandae unde iure tenetur sint esse quod ipsum odit, mollitia
            temporibus exercitationem voluptatem nam dignissimos. Necessitatibus
            doloremque perferendis fugiat quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora fugiat obcaecati nihil nam
            distinctio explicabo, iure porro officia minus rem impedit, officiis
            voluptates mollitia? Nobis assumenda fugiat unde facere ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi velit
            repudiandae unde iure tenetur sint esse quod ipsum odit, mollitia
            temporibus exercitationem voluptatem nam dignissimos. Necessitatibus
            doloremque perferendis fugiat quam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora fugiat obcaecati nihil nam
            distinctio explicabo, iure porro officia minus rem impedit, officiis
            voluptates mollitia? Nobis assumenda fugiat unde facere ipsam.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8 ">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <Link>{data.user.username}</Link>
            </div>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg"></Image>
              </Link>
              <Link>
                <Image src="instagram.svg"></Image>
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">
            <Search />
          </h1>
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
