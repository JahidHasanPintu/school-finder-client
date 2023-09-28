import React, { useEffect, useState } from "react";

const HomeSection3 = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch("Board.json")
      .then((Response) => Response.json())
      .then((data) => setBoards(data));
  }, []);
  return (
    <>
      <section className="section-three mt-8 pb-20  flex flex-col mb-10 ">
        <div class=" w-4/5 mx-auto mt-5 flex flex-row items-center gap-x-3">
          <img
            className="h-14 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/2048px-Government_Seal_of_Bangladesh.svg.png"
            alt=""
          />
          <h1 class="text-3xl font-bold">
            Board of Intermediate and Secondary Education 2023
          </h1>
          {/* <div class="h-1 w-16 bg-indigo-500 mx-auto mt-2"></div> */}
        </div>

        <div className="cards mt-10 grid grid-cols-4 w-4/5 mx-auto gap-5">
          {boards.map((board) => (
            <div className="card bg-white drop-shadow-2xl border-2 border-blue-700   p-5 rounded-xl">
              <img className="rounded-md h-30 w-30" src={board.img} alt="" />
              <p className="mt-3 font-semibold">{board.name}</p>
              <p className="mt-3 mb-4">Formation: {board.stb}</p>
              <a
                href={board.url}
                className="inline-block mb-2 bg-blue-700 text-white py-2 px-3 rounded-md font-semibold hover:bg-amber-400 hover:text-black"
              >
                See details
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeSection3;
