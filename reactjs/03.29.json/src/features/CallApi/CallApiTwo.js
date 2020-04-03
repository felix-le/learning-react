import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import TodoItem from "./components/TodoItem";
import UseInfiniteScroll from './components/UseInfiniteScroll'

function CallApiTwo(props) {
  const [initialUser, setInitiaUser] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const [page, setPage] = useState(1);
  const [limitRender, setLimitRender] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      const fetchUsers = async () => {
        const res = await axios.get(
          "http://localhost:4000/posts?_limit=" + `${limitRender}`
        );
        setInitiaUser(res.data);
        setVisibleUsers(res.data);
      };
      fetchUsers();
    }, 100);
  }, []);
  const moreData = () => {
    setLimitRender(limitRender + 10);
    setPage(page + 1)
    setIsFetChing(false)

    setTimeout(() => {
      console.log(page);
      console.log(initialUser);
      console.log(visibleUsers)
    }, 110);
    
  }
  const [isFetching, setIsFetChing] = UseInfiniteScroll(moreData);







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
