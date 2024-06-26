import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: Date;
  id: number;
}

export const BlogCard = ({
  authorName,
  id,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={authorName} />

          <div className=" font-extralight pl-2 text-sm flex justify-center flex-col">
            {" "}
            {authorName}
          </div>
          <div className=" flex justify-center flex-col pl-2 ">
            <Circle />
          </div>
          <div className=" pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {publishedDate.toLocaleDateString()}
          </div>
        </div>

        <div className=" text-xl font-semibold pt-2">{title}</div>
        <div className=" text-md font-thin">
          {content.slice(0, 100) + "..."}
        </div>
        <div className=" text-slate-500 text-sm font-thin pt-2">{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className=" h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({ name, size = 4 }: { name: string; size?: number }) {
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
        style={{ width: size * 6, height: size * 6 }}
      >
        <span className="font-xs text-gray-600 dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    </div>
  );
}
