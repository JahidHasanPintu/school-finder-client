import React, { useEffect, useState } from "react";
import { getBaseURL } from "../../api/baseURL";
import axios from "axios";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const baseURL = getBaseURL();
  const [books, setBooks] = useState([]);
  const [schoolData, setSchoolData] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterDivision, setFilterDivision] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const pathName = `${location.pathname}`;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const apiEndpoint = `${baseURL}/books?page=${page}&limit=${limit}&search=${search}&filterCategory=${filterCategory}`;
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
  }, [page, limit, search, filterCategory]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
  };

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setFilterCategory(cat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mx-10">
        <div className="flex ">
          <img
            className="mt-5"
            src="https://img.freepik.com/premium-vector/book-shelves-bookcase-library-bookstore-education_53500-172.jpg?size=626&ext=jpg&uid=R95679985&ga=GA1.1.945868740.1697346172&semt=sph"
            alt=""
          />
          <div>
            <h1 className="text-center text-3xl mt-14 font-serif">
              Our Digital Library
            </h1>
            <p className="text-justify font-serif mt-5 ms-5">
              Our digital library offers a vast and diverse collection of
              knowledge at your fingertips, spanning various subjects and
              disciplines. Users can easily access a wealth of information,
              including academic resources, literature, and multimedia content,
              fostering a dynamic learning environment. With user-friendly
              interfaces and advanced search capabilities, our digital library
              aims to empower individuals in their quest for information and
              intellectual exploration.
            </p>
            <form className="mt-10 w-[80%] ml-16 bg-slate-500 p-1 rounded-lg">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  onChange={handleSearch}
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm rounded-lg"
                  placeholder="Search books..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
              {search && (
                <div className="w-full p-4 mt-2 bg-gray-100 rounded-lg">
                  {books.length > 0 ? (
                    <ul>
                      {books.map((book) => (
                        <li
                          className="border-b border-gray-300 py-2 cursor-pointer"
                          key={book._id}
                        >
                          <Link to={book.pdf}>
                            <h2>{book?.name}</h2>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No books found</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="mx-14 mb-28">
        <div className="mt-3 flex justify-between items-center">
          <h1 className="text-3xl font-semibold ">All Books</h1> <hr />
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

        <section className="grid grid-cols-6 bg-slate-100 mt-8 gap-6  p-4 rounded">
          {books.map((book) => (
            <div
              key={book._id}
              className="flex flex-col items-center text-center shadow-sm gap-y-1 rounded w-30 h-[260px] bg-white border relative"
            >
              <img className="w-24 h-28 mt-2" src={book.image} alt="" />
              <h1 className="font-semibold">{book.name}</h1>
              <p>{book.authorName}</p>
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-orange-500 absolute bottom-1"
              >
                Download
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
