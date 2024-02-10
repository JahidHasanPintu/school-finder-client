import React, { useEffect, useState } from "react";

const RecommendedSearch = () => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("newschool.json")
      .then((res) => res.json())
      .then((data) => setSchools(data));
  }, []);
  return (
    <div className="">
      {schools.map((school) => (
        <div
          className="rounded-lg
           mt-5 flex flex-col items-center p-5 bg-slate-400  "
          key={school._id}
        >
          <img className="w-[40%]" src={school.img} alt="" />
          <p className="font-bold">{school.name}</p>
          <p>{school.des}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendedSearch;
