import React, { useEffect, useState } from "react";

const ExploreBoard = () => {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    fetch("EduBoard.json")
      .then((res) => res.json())
      .then((data) => setBoards(data));
  }, []);
  return (
    <div className="mx-14 mt-20">
      <div className=" mb-5 mt-5 flex flex-row items-center gap-x-3">
        <img
          className="h-14 "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/2048px-Government_Seal_of_Bangladesh.svg.png"
          alt=""
        />
        <h1 className="text-3xl font-bold">
          Explore Education Board of Bangladesh
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {boards.map((board) => (
          <div
            key={board.id}
            className="relative flex items-center  bg-white border shadow-lg  rounded-xl "
          >
            <div className="bg-blue-500  text-white font-bold  text-xl w-20 flex items-center justify-center py-8 ">
              {board.id}
            </div>

            <div className="flex items-center ms-10 gap-x-3 ">
              <img className="w-[60px]" src={board.img} alt="" />
              <p className="font-semibold">{board.name}</p>
              <a
                target="_blank"
                href={board.link}
                className="absolute right-3 underline text-lg text-blue-600"
              >
                click
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreBoard;
