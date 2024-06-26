import { Appbar } from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="bg-gradient-to-b from-slate-200 to-gray-300 h-screen">
        <div className=" grid grid-cols-12 px-10 pt-8 max-w-screen-xl">
          <div className="mx-10 col-span-10 w-4/5">
            <div className=" text-5xl font-extrabold">{blog.title} </div>
            <div className=" pt-4">{blog.content} </div>
          </div>
          <div className=" col-span-2">
            <div className="mx-5 text-lg text-gray-400">Author</div>
            <div className=" flex ">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar name={blog.author.name} size={6} />
              </div>

              <div>
                <div className=" text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <p className=" pt-2 text-slate-500">
                  some thing about the author's ability to post this blogs{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
