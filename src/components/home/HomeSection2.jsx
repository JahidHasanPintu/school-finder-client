import React, { useEffect, useState } from "react";

const HomeSection2 = () => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("Schools.json")
      .then((Response) => Response.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <>
      <section className="section-two bg-amber-300  mt-16 flex flex-col">
        <div className="sub-section-one mt-16">
          <div class="text-center">
            <h1 class="text-3xl font-bold">Top 8 Schools in Bangladesh 2023</h1>
            <div class="h-1 w-16 bg-indigo-500 mx-auto mt-2"></div>
          </div>
        </div>
        <div className="sub-section-two w-4/5 mx-auto mt-10 mb-10">
          <div className="grid grid-cols-4 gap-y-11 ">
            {schools.map((school) => (
              <div className="flex  flex-col items-center justify-center">
                <img
                  className="h-36 transition-transform transform hover:scale-110  shadow rounded-full"
                  src={school.img}
                  alt="VNSC Logo"
                />
                <a
                  className="font-bold  text-black hover:text-blue-700 text-center mt-3"
                  href={school.url}
                >
                  {school.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection2;
