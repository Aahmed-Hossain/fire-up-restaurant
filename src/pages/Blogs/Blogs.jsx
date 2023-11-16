
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  const [showFullDescriptions, setShowFullDescriptions] = useState({});

  const toggleDescription = (blogId) => {
    setShowFullDescriptions((prev) => ({
      ...prev,
      [blogId]: !prev[blogId],
    }));
  };

  return (
    <div className="mb-8 grid grid-cols- gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-2">
      {blogs?.map((blog) => (
        <div key={blog._id}>
          <div className="relative">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src={blog?.image}
              alt=""
            />

            <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src={blog?.author_img}
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {blog?.author}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {blog?.author_profession}
                </p>
              </div>
            </div>
          </div>

          <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">
            {blog?.title}
          </h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {showFullDescriptions[blog._id] ? (
              <span>
                {blog?.description}{" "}
                <button
                  className="text-blue-600 hover:text-blue-400"
                  onClick={() => toggleDescription(blog._id)}
                >
                  Read Less
                </button>
              </span>
            ) : (
              <span>
                {blog?.description?.slice(0, 300)}{" "}
                {blog?.description.length > 300 && (
                  <button
                    className="text-blue-600 underline hover:text-blue-400"
                    onClick={() => toggleDescription(blog._id)}
                  >
                    Read More
                  </button>
                )}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;



