import React from "react";

function Excercise0304() {
  const bookList = [
    {
      title: "You are my sunshine",
      author: "Viet Anh Le",
      pages: "My life"
    },
    {
      title: "I need Money",
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



  class Library extends React.Component {
    constructor() {
      super();
      this.state = {
        openState: false
      }
    }

    // cac lifecycle bat buoc fai viet o tren render.
    // Need to help change value in openstate
    handleChangeOpen = () => {
      const { openState } = this.state;
      this.setState({ openState: !openState })
    }

    render() {
      const { openState } = this.state;
      // neu cac function ve conditional, bien. Please write here.
      const colorText = openState ? "red" : "blue";

      return (
        <div className={`container ${colorText}`}>  {/* template literal*/}
          <h1>The library is <span>{openState ? "Open" : "Close"}</span></h1>
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
          <button className="btn btn-primary" onClick={this.handleChangeOpen}>Change</button>
        </div >
      );
    }
  }

  return (
    <>
      <Library books={bookList} />
    </>
  );
}

export default Excercise0304;
