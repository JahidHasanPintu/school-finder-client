import React, { useEffect, useState } from "react";

const SmallBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("blogs"); // Set the desired category

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.blogs));
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) => blog.category === filteredCategory
  );

  return (
    <div>
      <section className="">
        <div className="bg-blue-800 p-3 text-white">
          <h1 className="text-center mt-6 font-semibold text-2xl ">
            Latest Blogs
          </h1>
        </div>
        <hr className="bg-orange-600 h-5" />
      </section>
      <section>
        <div className="grid grid-cols-4 mx-12 mt-5 gap-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className="border p-4 col-span-1 gap-y-3 flex flex-col w-[300px] h-[380px] shadow-sm"
            >
              <h1 className="font-semibold">{blog.title}</h1>

              <a target="_blank" rel="noopener noreferrer" href={blog.blogLink}>
                <img src={blog.image} alt="" />
              </a>

              <p className="text-justify text-sm">{blog.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SmallBlogs;
