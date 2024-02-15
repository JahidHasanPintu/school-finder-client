import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { getBaseURL } from "../../api/baseURL";
import axios from "axios";
import RecommendedSearch from "./RecommendedSearch";
const SchoolDetails = () => {
  const location = useLocation();
  const school = location.state.school;

  const baseURL = getBaseURL();
  const [isLoading, setIsLoading] = useState(true);
  const [recSchools, setRecSchools] = useState([]);
  const eiin = school?.EIIN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const apiEndpoint = `${baseURL}/recommendation`;
        const response = await axios.post(apiEndpoint, { eiin });
        setRecSchools(response.data);
      } catch (error) {
        console.error("Error fetching schools:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    // <div class="mt-5 mx-10 w-8/12">
    //     {/* <h3>{school.INSTITUTE_NAME_NEW}</h3> */}
    // </div>
    <div className="mx-28 mt-10 mb-28 ">
      <section className="">
        <div className="">
          <img
            className="rounded"
            src="https://img.freepik.com/premium-photo/exterior-view-typical-american-school_685067-4599.jpg?size=626&ext=jpg&ga=GA1.1.945868740.1697346172&semt=sph"
            alt=""
          />
          <div className="">
            <h1 className="font-bold text-xl mt-5">
              {school.INSTITUTE_NAME_NEW}
            </h1>
            <Link className="font-bold mt-1" to={"/"} target="_blank">
              📞 Contact +880 {school.MOBPHONE}
            </Link>
          </div>
          <div>
            <p> Division : {school.DIVISION_NAME}</p>
            <p>District : {school.DISTRICT_NAME}</p>
            <p>
              <CiLocationOn /> {school.LOCATION}
            </p>
          </div>
          <hr className="h-1 bg-indigo-950" />
          <p className="text-md text-justify">
            <span className="font-bold text-blue-900">
              {school.INSTITUTE_NAME_NEW}
            </span>{" "}
            is a distinguished educational institution located in the{" "}
            <span className="font-bold">{school.DIVISION_NAME}</span>
            division, specifically within the vibrant district of{" "}
            <span className="font-bold">{school.DISTRICT_NAME}</span>. Renowned
            for its commitment to academic excellence, the college serves as a
            beacon of knowledge, fostering a dynamic learning environment for
            students. With a rich history and a tradition of producing
            accomplished individuals, {school.INSTITUTE_NAME_NEW} stands as a
            testament to the educational prowess within the heart of the capital
            city. The institution's strategic location provides students with
            access to a multitude of resources, cultural experiences, and
            opportunities, further enhancing their holistic development. As a
            respected establishment in the education landscape,{" "}
            {school.INSTITUTE_NAME_NEW} continues to contribute significantly to
            the intellectual and social fabric of the Dhaka division, shaping
            the future leaders of tomorrow.
          </p>
        </div>
        <div className="">
          <h1 className="font-bold text-3xl text-blue-950 mt-10">
            Related Schools
          </h1>
          <div className="grid grid-cols-2 gap-5">
            {recSchools.map((school) => (
              <div
                className="rounded-lg
           mt-5 flex flex-col items-center p-5 bg-slate-400  "
                key={school._id}
              >
                <img
                  className="w-[30%] j="
                  src="https://cdn-icons-png.freepik.com/256/8074/8074788.png?uid=R95679985&ga=GA1.1.1242648836.1702358523&semt=ais"
                  alt=""
                />
                <p className="font-bold">{school.INSTITUTE_NAME_NEW}</p>
                <p>{school.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolDetails;
