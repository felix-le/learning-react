import React from "react";

function Excercise0302() {
  /**
   * We have a array BookList contain many Object. We need to show context in the array on the HTML
   *
   * We have function Library, we must create a props as books to transfer an other function to Library
   * Moreover, we have a function can show detail an Item (with three props)
   *
   * In the Library on HTML (components)  ==> We transfer the value == Booklist where store array - object data
   *
   * In the Library function ==> We check the length of the BookList Array. True: we check  each Item in this array.
   *
   * IN the function of map we create a loop for each item
   *
   * for each item we run it through function component Book with three props of Book.
   *
   * 
   * SUMARY: 
   * - A array contains obj data
   * - A function (with props) renders form for each object
   * - A function component (with props) inputs the array contain obj data
   * 
   * - The Function component - with props contain the array(contains obj data)
   * - The Array use map method to run through the function (with form render) - with props
   * 
   */

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
      <div>
        {bookList.length ? (
          bookList.map((item, i) => (
            <Book key={i} title={item.title} author={item.author} pages={item.pages} />
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

export default Excercise0302;
