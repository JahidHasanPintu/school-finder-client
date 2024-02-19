import React from "react";
import bannerImg2 from "../images/bg-2.jpg";
import { Link } from "react-router-dom";
const HomeSection1 = () => {
  return (
    <>
      <section className="section-one mt-5 flex flex-col">
        {/* subsection-one start here  */}
        <div className="sub-section-one mt-7 flex flex-row items-start justify-between max-w-full mx-28 ">
          <div className="flex-1 w-1/2">
            <img className="rounded-xl" src={bannerImg2} alt="" />
          </div>
          <div className="flex-2 w-1/2 ms-24  mt-3">
            <p className="text-2xl font-semibold text-slate-800 text-justify mb-8">
              <span className="text-blue-400">Discover</span> Your Path to
              Success with{" "}
              <span className="text-amber-700">School Finder BD</span>.{" "}
              <span className="text-blue-400">School Finder BD</span> simplifies
              the school search process, helping you find the perfect school.
              Your journey to knowledge, growth, and a brighter future starts
              here.
            </p>
            <Link
              to={"/about"}
              className="bg-blue-600 hover:bg-pink-500 hover:text-black px-6 rounded-xl font-semibold text-xl
             text-white text-center py-3"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection1;
