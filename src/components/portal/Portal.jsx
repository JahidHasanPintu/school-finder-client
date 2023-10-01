import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portal = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("News.json")
      .then((Response) => Response.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <>
      <div className="bg-gray-100 shadow-2xl w-11/12 mx-auto mt-10 p-5 mb-10 rounded-lg">
        <h1 className="bg-slate-700 py-2 px-5  rounded-lg text-3xl font-bold text-white">
          All Educational Update News
        </h1>
        <div className="cards grid grid-cols-4 mt-10 gap-6">
          {newses.map((news) => (
            <div className="card   ">
              <Link to={news.url}>
                <img
                  className="shadow-xl border-2 border-slate-800 w-72 h-28 mb-1 rounded-md transition-transform transform hover:scale-110 "
                  src={news.img}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portal;
