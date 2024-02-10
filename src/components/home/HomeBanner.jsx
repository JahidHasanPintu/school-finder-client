import React, { useState } from "react";
import bannerImg from "../assets/schoolfinder.png";
import { useNavigate } from "react-router-dom";
const HomeBanner = () => {
  const [searchTex, setSearchTex] = useState("");
  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTex(searchText);
  };
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/result`, { state: { searchTex } });
  };

  return (
    <>
      <div className="relative bg-blue-800 w-full h-[531px]">
        <div>
          <div className="absolute top-14 left-10">
            <h1 className="text-5xl text-yellow-300 font-bold">
              Discover your path to knowledge <br /> Find your Idle School
            </h1>
            <h1 className="text-2xl font-semibold mt-10 text-white">
              Search your Idle School name or location
            </h1>
          </div>
          <div className="absolute bottom-10 left-10 w-1/2">
            <p className="text-justify  text-white text-lg">
              Embark on a journey of intellectual exploration to discover your
              ideal educational path. Uncover your Idle School, where your
              passions and interests converge, shaping a unique roadmap to
              knowledge acquisition. By identifying this personalized avenue,
              you can cultivate a meaningful and fulfilling learning experience
              tailored to your individual aspirations.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="absolute top-10 left-10 w-1/2 mt-56"
          >
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
                placeholder="Search any Schools or locations..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="absolute bottom-0  right-0">
          <img src={bannerImg} alt="" />
        </div>
      </div>

      {/* <section className="section-one bg-amber-400  ">
        
        <div className="sub-section-one w-4/5 mx-auto flex flex-row justify-between items-center gap-16">
          <div className="flex-1 mt-20">
            <h1 className="text-3xl font-bold">
              <span className="text-blue-500">Discover</span> Your{" "}
              <span className="text-blue-500">Path</span> to Knowledge <br />
              Find Your Ideal School with Us
            </h1>
            <p className="text-xl mt-5 mb-8 ms-2 font-semibold text-black">
              Search for School Names and Location
            </p>

            <form onSubmit={handleSubmit} class="flex items-center drop-shadow-md">
              <label for="voice-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-black dark:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                    />
                  </svg>
                </div>
                <input
                  onChange={handleSearch}
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:border-blue-600 dark:placeholder-slate-700 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search School Name and Location..."
                  required
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    class="w-4 h-4 text-black dark:text-black hover:text-gray-900 dark:hover:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                    />
                  </svg>
                </button>
              </div>
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4 mr-2"
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
                Search
              </button>
            </form>
          </div>
          <div className=" flex-2 mt-10">
            <img src={bannerImg} className="w-[29rem] h-[24rem] " alt="" />
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HomeBanner;
