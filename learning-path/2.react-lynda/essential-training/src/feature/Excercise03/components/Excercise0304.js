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
  


  class Library extends React.Component{


    
    render(props) {
      var openState = false;
      
      this.componentDidUpdate = () => {
        console.log(openState)
      }


      // Need to help change value in openstate
      const handleChangeOpen = () => {
        openState = !openState;
        console.log(openState)
      }
      // Need to help change value in openstate
      return (
        <div className="container">
          {/* // Need to help change value in openstate */}
          {/* <h1>The library is {this.state.openState ? "Open" : "Close"}</h1> */}
          {/* // Need to help change value in openstate */}
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
          <button className="btn btn-primary" onClick={handleChangeOpen}>Change</button>
        </div>
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
