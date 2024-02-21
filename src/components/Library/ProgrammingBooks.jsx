import React, { useEffect, useState } from "react";

const ProgrammingBooks = () => {
  const [programmingBooks, setProgrammingBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books/")
      .then((res) => res.json())
      .then((data) => {
        // Filter books based on the "programming" category
        const programmingCategoryBooks = data.books.filter(
          (book) => book.category === "programming"
        );
        setProgrammingBooks(programmingCategoryBooks);
      });
  }, []);

  return (
    <div className="mx-14 mb-28">
      <h1 className="text-3xl font-semibold">Programming Books</h1> <hr />
      <section className="grid grid-cols-6 bg-slate-100 mt-8 gap-6 p-4 rounded">
        {programmingBooks.map((book) => (
          <div
            key={book._id}
            className="flex flex-col items-center text-center shadow-sm gap-y-1 rounded w-30 h-[260px] bg-white border relative"
          >
            <img className="w-24 h-28 mt-2" src={book.image} alt="" />
            <h1 className="font-semibold">{book.name}</h1>
            <p>{book.authorName}</p>
            <a
              href={book.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-orange-500 absolute bottom-1"
            >
              Download
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProgrammingBooks;
