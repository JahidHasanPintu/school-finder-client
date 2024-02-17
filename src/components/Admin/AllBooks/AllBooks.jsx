import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getBaseURL } from "../../../api/baseURL";
import axios from "axios";
import Pagination from "../../Pagination/Pagination";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const AllBooks = () => {
  const baseURL = getBaseURL();
  const [books, setBooks] = useState([]);
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
    const apiEndpoint = `${baseURL}/books?page=${page}&limit=${limit}&search=${search}&filterCategory=${category}`;
    axios
      .get(apiEndpoint)
      .then((response) => {
        setBooks(response.data.books);
        setSchoolData(response.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching books:", error);
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
  const handleDelete = (bookId) => {
    const apiEndpoint = `${baseURL}/books/delete/${bookId}`;
    axios
      .delete(apiEndpoint)
      .then((response) => {
        toast.success(response.data.message);
        console.log(response.data);
        setBooks((prevBooks) =>
          prevBooks.filter((book) => book._id !== bookId)
        );
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching books:", error);
      });
  };

  const navigate = useNavigate();
  const handleEdit = (book) => {
    navigate(`/admin/edit-book`, { state: { book } });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="px-1 border-b flex  justify-between items-center">
          <Link to={"/admin/addbook"}>
            <button className="mb-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded">
              Add Book{" "}
            </button>
          </Link>
          <div className="mx-2 mb-2">
          <input
            type="text"
            name="search"
            onChange={handleSearch}
            placeholder="Search Books"
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
            <option value="islamic">Islamic</option>
            <option value="children">Children</option>
            <option value="programming">Programming</option>
            <option value="sports">Sports</option>
            <option value="story">Story</option>
            <option value="cook">Cook</option>
            <option value="poetry">poetry</option>
          </select>
          </div>
          

          
        </div>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b">#</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Author</th>
              <th className="py-2 px-4 border-b">Category</th>

              <th className="py-2 px-4 border-b">PDF</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {books.map((book, index) => (
              <tr key={book._id}>
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    className="w-14 h-14 rounded-full "
                    src={book?.image}
                  ></img>

                </td>
                <td className="py-2 px-4 border-b">{book?.name}</td>
                <td className="py-2 px-4 border-b">{book?.authorName}</td>
                <td className="py-2 px-4 border-b">{book?.category}</td>

                <td className="py-2 px-4 border-b">
                  <Link to={book?.pdf}>
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
                        onClick={() => handleEdit(book)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                      >
                        Edit{" "}
                      </button>
                    </div>
                    <div className="px-1 border-b">
                      <button
                        onClick={() => handleDelete(book._id)}
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

export default AllBooks;
