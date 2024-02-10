import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
const Portal = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("News.json")
      .then((Response) => Response.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <>
      <section className="bg-gray-100 shadow-2xl w-11/12 mx-auto mt-10 p-5 mb-10 rounded-lg">
        <h1 className="bg-slate-700 py-2 px-5  rounded-lg text-3xl font-bold text-white">
          All Educational Update News
        </h1>
        <div className="cards grid grid-cols-4 mt-10 gap-6">
          {newses.map((news) => (
            <div className="card   ">
              <Link to={news.url} target="_blank">
                <img
                  className="shadow-xl border-2 border-slate-800 w-72 h-28 mb-1 rounded-md transition-transform transform hover:scale-110 "
                  src={news.img}
                  alt=""
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className="flex mt-4 mx-16 mb-20 ">
        <div className="w-2/3 mt-10">
          <p className="text-3xl mb-3 font-semibold">
            Unveiling the Latest in Educational News and Insights our Website.
          </p>
          <p className="text-justify text-slate-600">
            "EduPulse delivers a dynamic blend of breaking educational news,
            insightful analyses, and thought-provoking features, providing a
            comprehensive snapshot of the ever-evolving landscape of learning.
            Stay informed about policy changes, emerging trends, and innovative
            practices shaping the education sector. Whether you're a student,
            educator, or education enthusiast, EduPulse is your go-to source for
            staying abreast of the latest developments and fostering a deeper
            understanding of the educational journey."
          </p>
          <div className="mt-20">
            <div>
              <p className="text-2xl font-semibold mt-16 bg-blue-600 text-white w-[550px] text-center p-4">
                {" "}
                Live some educational video
              </p>{" "}
              <hr className="h-[10px] mt-1 bg-orange-700 w-[550px]" /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://www.youtube.com/watch?v=vuTY4FDAbpA&pp=ygUKZWR1Y2F0aW9uIA%3D%3D"
              />{" "}
              <br /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://youtu.be/sb54zo11hSU"
              />{" "}
              <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://www.youtube.com/watch?v=0_A9J3q3SrE&pp=ygUKZWR1Y2F0aW9uIA%3D%3D"
              />
            </div>
            <div>
              <p className="text-2xl font-semibold mt-16 bg-yellow-600 text-white w-[550px] text-center p-4">
                {" "}
                Educational videos for kids
              </p>{" "}
              <hr className="h-[10px] mt-1 bg-orange-700 w-[550px]" /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://youtu.be/XF_RhnCGuHM"
              />{" "}
              <br /> <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://youtu.be/0GAhHaK4y58"
              />{" "}
              <br />
              <ReactPlayer
                height="300px"
                width="550px"
                url="https://www.youtube.com/watch?v=0_A9J3q3SrE&pp=ygUKZWR1Y2F0aW9uIA%3D%3D"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" ms-10 mt-10 ">
            <ReactPlayer
              height="300px"
              width="550px"
              url="https://youtu.be/q-Y-z6HmRgI"
            />
          </div>
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://youtu.be/Bgmjs6AcFjU"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=eR_F3PIbFsE"
          />
          <p className="text-2xl font-semibold mt-16 bg-lime-600 text-white w-[550px] text-center p-4">
            {" "}
            Educational crafting videos for kids
          </p>{" "}
          <hr className="h-[10px] mt-1 bg-orange-700 w-[550px]" /> <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=HDFL15FxWEc&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=2hcLN7OXCF0&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=TJXqoONf4lc&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />{" "}
          <br />
          <ReactPlayer
            height="300px"
            width="550px"
            url="https://www.youtube.com/watch?v=lpHXVM6ELwk&pp=ygUNa2lkcyBjcmFmdGluZw%3D%3D"
          />
        </div>
      </section>
    </>
  );
};

export default Portal;
