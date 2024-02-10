import React, { useEffect, useState } from "react";
const RecommendedSearch = (props) => {

  const slicedSchools = props.schools.slice(5, 10);

  
  return (
    <div className="">
      {slicedSchools.map((school) => (
        <div
          className="rounded-lg
           mt-5 flex flex-col items-center p-5 bg-slate-400  "
          key={school._id}
        >
          <img className="w-[40%]" src="https://cdn-icons-png.freepik.com/256/8074/8074788.png?uid=R95679985&ga=GA1.1.1242648836.1702358523&semt=ais" alt="" />
          <p className="font-bold">{school.INSTITUTE_NAME_NEW}</p>
          <p>{school.des}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendedSearch;
