import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center flex-col mx-10">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className=" flex justify-center bg-gradient-to-b from-red-100 to-gray-300">
        {" "}
        <div className="  ">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name || "anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={new Date()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
