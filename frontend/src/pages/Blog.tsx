import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="h-screen flex flex-row justify-center">
        <BlogSkeleton />
      </div>
    );
  }
  if (!blog) {
    return <div>No blog found</div>; // Or any other appropriate fallback UI
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
