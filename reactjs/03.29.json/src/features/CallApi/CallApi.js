import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";

const CallApi = props => {
  const [initialUser, setInitialUser] = useState([]);
  const [visibleUser, setVisibleUser] = useState([]);

  useEffect(() => {
    
    setTimeout( () => {
      const fetchUsers = async () => {
        const res = await axios.get("http://localhost:4000/posts");
        setInitialUser(res.data);
        setVisibleUser(res.data);
      };
      fetchUsers();
    }, 100);
  }, []);

  const handleReadMoreItem = index => {
    props.history.push(`/detail-item/${index}`);
  };
  // Truyền tham số trả về cho Components ở App.
  const handleDeleteItem = index => {
    const removeArr = visibleUser.filter(item => item.index !== index);
    setVisibleUser(removeArr);
  };

  const handleSearchValue = event => {
    const { value } = event.target;

    const keyword = value.toLowerCase();
    const filterUser = initialUser.filter(
      user => user.title.indexOf(keyword) !== -1
    );
    setVisibleUser(filterUser);
  };

  return (
    <>
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
        {visibleUser.length ? (
          visibleUser.map((item, index) => {
            return (
              <li key={index} className="well">
                <h3>
                  {index} {item.title}
                </h3>
                <p>{item.body}</p>
                <div className="buttonContainer">
                  <Button
                    handleClick={() => handleReadMoreItem(index)}
                    nameBtn="Read More"
                    bgColor="btn-primary"
                  />
                  <Button
                    handleClick={() => handleDeleteItem(index)}
                    nameBtn="Delete"
                    bgColor="btn-danger"
                  />
                </div>
              </li>
            );
          })
        ) : (
          <div className="spinner"></div>
        )}
      </ul>
    </>
  );
};
export default CallApi;
