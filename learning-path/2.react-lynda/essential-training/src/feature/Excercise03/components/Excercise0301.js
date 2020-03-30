import React from 'react'

function Excercise0301() {


  const Book = ({ title, author, pages }) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>Pages: {pages}</p>
      </section>
    )
  }


  const Library = () => {
    return (
      <div>
        <Book title="You are my sunshine" author="Viet Anh Le" pages="My life" />
        <Book title="I need Money" author="Viet Anh Le" pages="1000 pages" />
        <Book title="How I become Canadian" author="Viet Anh Le" pages="300 pages" />
      </div>
    )
  }

  return (
    <>
      <Library />
    </>
  )
}

export default Excercise0301;
