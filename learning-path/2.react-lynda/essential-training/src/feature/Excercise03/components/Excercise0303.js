import React from "react";

function Excercise0303() {
  const bookList = [
    {
      title: "You are my sunshine",
      author: "Viet Anh Le",
      pages: "My life"
    },
    {
      title: "YI need Money",
      author: "Viet Anh Le",
      pages: "1000 pages"
    },
    {
      title: "I love my wife",
      author: "Viet Anh Le",
      pages: "300 pages"
    }
  ];

  const Book = ({ title, author, pages }) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages}</p>
      </section>
    );
  };

  const Library = books => {
    return (
      <div className="container">
        {bookList.length ? (
          bookList.map((item, i) => (
            <Book
              key={i}
              title={item.title}
              author={item.author}
              pages={item.pages}
            />
          ))
        ) : (
          <div>No Thing Else</div>
        )}
      </div>
    );
  };

  return (
    <>
      <Library books={bookList} />
    </>
  );
}

export default Excercise0303;
