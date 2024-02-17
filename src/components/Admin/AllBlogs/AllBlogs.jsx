import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../../api/baseURL";
import axios from "axios";
import Pagination from "../../Pagination/Pagination";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AllBlogs = () => {
  const baseURL = getBaseURL();
  const [blogs, setBlogs] = useState([]);
  const [schoolData, setSchoolData] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const location = useLocation();
  const pathName = `${location.pathname}`;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const apiEndpoint = `${baseURL}/blogs?page=${page}&limit=${limit}&search=${search}&category=${category}`;
    axios
      .get(apiEndpoint)
      .then((response) => {
        setBlogs(response.data.blogs);
        setSchoolData(response.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching blogs:", error);
      });

    setIsLoading(false);
  }, [page, limit, search, category]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setCategory(cat);
  };

  const handleDelete = (blogID) => {
    const apiEndpoint = `${baseURL}/blogs/delete/${blogID}`;
    axios
      .delete(apiEndpoint)
      .then((response) => {
        toast.success(response.data.message);
        console.log(response.data);
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogID)
        );
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching blogs:", error);
      });
  };

  const navigate = useNavigate();
  const handleEdit = (blog) => {
    navigate(`/admin/edit-blogs`, { state: { blog } });
  };

  if (isLoading) {
    return <Loading />;
  }


  return (
    <div>
      <div className="overflow-x-auto">
        <div className="px-1 border-b flex justify-between items-center">
          <Link to={"/admin/addblogs"}>
            <button className="mb-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
              Add Blog{" "}
            </button>
          </Link>
          <div className="mx-2 mb-2">
            <input
              type="text"
              name="search"
              onChange={handleSearch}
              placeholder="Search Blogs"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mx-2 mb-2">
            <select
              name="category"
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded"
            >
              <option value="" disabled selected hidden>
                Filter category
              </option>
              <option value="events">Events</option>
              <option value="blogs">Blogs</option>
            </select>
          </div>
        </div>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Description</th>

              <th className="py-2 px-4 border-b">Link</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {blogs.map((blog, index) => (
              <tr key={blog._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    className="w-14 h-14 rounded-full "
                    src={blog?.image}
                  ></img>

                </td>
                <td className="py-2 px-4 border-b">{blog?.title}</td>
                <td className="py-2 px-4 border-b">{blog?.category}</td>
                <td className="py-2 px-4 border-b">{blog?.description}</td>

                <td className="py-2 px-4 border-b">
                  <Link to={blog?.blogLink}>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                    >
                      Open
                    </button>
                  </Link>

                </td>

                <td>
                  <div className="flex">
                    <div className="px-1 border-b">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                      >
                        Edit{" "}
                      </button>
                    </div>
                    <div className="px-1 border-b">
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                      >
                        Delete{" "}
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          path={pathName}
        />
      </div>
    </div>
  );
};

export default AllBlogs;
