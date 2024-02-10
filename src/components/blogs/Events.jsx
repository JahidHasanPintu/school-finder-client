import React, { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const targetCategory = "events"; // Specify the category you want to display

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        // Filter events based on the target category
        const filteredEvents = data.blogs.filter(
          (event) => event.category === targetCategory
        );
        setEvents(filteredEvents);
      });
  }, [targetCategory]);

  return (
    <div>
      <section className="text-center mt-10">
        <h1 className="bg-slate-200 p-10 font-semibold text-3xl ">
          Latest Events
        </h1>
        <hr className="bg-orange-600 h-3" />
      </section>
      <section className="mx-14 mt-10">
        {events?.map((e) => (
          <div key={e._id} className="grid grid-cols-2 border p-5 rounded mt-2">
            <div className="col-span-1 me-3 ">
              <a href="">
                <h1 className="text-4xl font-semibold font-serif mt-5">
                  {e.title}
                </h1>
              </a>
              <p className="text-lg mt-10">{e.description}</p>
              <p className="text-semibold mt-10">{e.createdAt}</p>
            </div>
            <a href="">
              <img className="rounded" src={e.image} alt="" />
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;
