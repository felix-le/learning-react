import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import TodoItem from "./components/TodoItem";

function CallApiTwo(props) {
  const [initialUser, setInitiaUser] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      fetchUsers();
    }, 1000)
    const fetchUsers = async () => {
      const res = await axios.get(
        `http://localhost:4000/posts?_page=${currentPage}&_limit=${limit}`
      );
      setInitiaUser(res.data);
      setVisibleUsers([...visibleUsers, ...res.data]);
    };

  }, [currentPage]);

  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        setCurrentPage(currentPage => currentPage + 1) //call back function
      }
    };

    window.addEventListener('scroll', handleScroll);

    // clean up function trong hook react: khi add 1 event listener thi vui long remove no khi roi` khoi component do (Eg: scroll...)
    // neu ban ko remove thi no se lam ton' bo nho 
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // const moreData = () => {
  //   setLimitRender(limitRender + 10);
  //   setPage(page + 1)
  //   setIsFetChing(false)

  //   setTimeout(() => {
  //     console.log(page);
  //     console.log(initialUser);
  //     console.log(visibleUsers)
  //   }, 110);
  // }






  const handleSearchValue = event => {
    const { value } = event.target;
    const keyword = value.toLowerCase();
    const filterUser = initialUser.filter(
      user => user.title.indexOf(keyword) !== -1
    );
    setVisibleUsers(filterUser);
  };

  const handleReadMore = id => {
    // console.log(id);
    props.history.push(`/detail-item/${id}`);
  };
  const handleDeleteItem = id => {
    const removeArr = visibleUsers.filter(item => item.id !== id);
    setVisibleUsers(removeArr);
  };
  return (
    <div>
      <h1> this is call api page </h1>
      <h3>List Item</h3>
      <div className="card-view">
        <div className="search-form-box top-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control click-me h100"
              placeholder="Please search by title..."
              onChange={handleSearchValue}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary search-btn"
              // onClick={handleSubmitSearch}
              >
                <img src="https://md-aqil.github.io/images/Search.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul id="todoList">
        {visibleUsers.length ? (
          visibleUsers.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={`${item.id}  ${item.title}`}
                body={item.body}
                handleReadMore={() => handleReadMore(item.id)}
                handleDeleteItem={() => handleDeleteItem(item.id)}
              />
            );
          })
        ) : (
            <p>Nothing to Show</p>
          )}
      </ul>
    </div>
  );
}

export default CallApiTwo;
