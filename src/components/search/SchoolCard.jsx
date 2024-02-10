import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SchoolCard = (props) => {
  const school = props?.school;
  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`/school-details/${school._id}`, { state: { school } });
  };
  // const [DIVISION_NAME, DISTRICT_NAME, THANA_NAME, TYP, LVL, EIIN, INSTITUTE_NAME_NEW, POST_OFFICE, LOCATION, MOBPHONE] = props.school || [];

  return (
    <div onClick={navigateToDetails} class="mt-5 mx-10 w-8/12">
      <div className="bg-gray-200 p-5 lg:flex  items-center rounded-lg w-[800px]  h-[250px] ">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <img
            class="mr-4 w-[80%]"
            src="https://cdn-icons-png.freepik.com/256/8074/8074788.png?uid=R95679985&ga=GA1.1.1242648836.1702358523&semt=ais"
            alt="school"
          />
        </div>
        <div class="mb-8 ml-5">
          <p class="text-sm text-gray-600 flex items-center">
            EIIN: {props?.school?.EIIN || "NA"}
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">
            {props?.school?.INSTITUTE_NAME_NEW || "NA"}
          </div>
          <p class="text-gray-700 text-base">
            Division: {props?.school?.DIVISION_NAME || "NA"} District:{" "}
            {props?.school?.DISTRICT_NAME || "NA"} Thana:{" "}
            {props?.school?.THANA_NAME || "NA"} Type:{" "}
            {props?.school?.TYP || "NA"} Level: {props?.school?.LVL || "NA"}{" "}
            Post: {props?.school?.POST_OFFICE || "NA"}: Location:{" "}
            {props?.school?.LOCATION || "NA"} Mobile:{" "}
            {props?.school?.MOBPHONE || "NA"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
