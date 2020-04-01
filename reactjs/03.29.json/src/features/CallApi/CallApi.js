import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/Button";
// import { createBrowserHistory } from 'history';
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
/**
 * 
1/ tim hieu json-server, ket hop vs react
github: https://github.com/typicode/json-server
package: https://www.npmjs.com/package/json-server
2/ call api with axios
3/ show list item
4/ show detail of the item.

Link Api: https://jsonplaceholder.typicode.com/posts

 */
// 1/ task: tui muon ra 1 trang detail de xem detail cua 1 item
// Khi console.log(res) hien thi data bt
// Khi parse no ra thi bi loi??
const CallApi = props => {
  const [initialUser, setInitialUser] = useState([]);
  const [visibleUser, setVisibleUser] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const fetchUsers = async () => {
        const res = await axios.get("http://localhost:4000/posts");
        setInitialUser(res.data);
        setVisibleUser(res.data)
      };
      fetchUsers();
    }, 100);
  }, []);


  const handleReadMoreItem = id => {
    props.history.push(`/detail-item/${id}`);
  };
  // Truyền tham số trả về cho Components ở App.
  const handleDeleteItem = id => {
    const removeArr = visibleUser.filter(item => item.id !== id);
    setVisibleUser(removeArr);
  };

  // Bug to vai dai, Filter lỗi nhé. éo đỡ được , éo biết fix kakakak~~~~~~
  const handleSearchValue = event => {
    const { value } = event.target;

    const keyword = value.toLowerCase();
    const filterUser = initialUser.filter(user => user.title.indexOf(keyword) !== -1);
    setVisibleUser(filterUser)
  };
  // Bug to vai dai, Filter lỗi nhé. éo đỡ được , éo biết fix kakakak!~~~~~~~~~ console thi duoc nhung ko render dc

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
          visibleUser.map(item => {
            return (
              <li key={item.id} className="well">
                <h3>
                  {item.id} {item.title}{" "}
                </h3>
                <p>{item.body}</p>
                <div className="buttonContainer">
                  <Button
                    handleClick={() => handleReadMoreItem(item.id)}
                    nameBtn="Read More"
                    bgColor="btn-primary"
                  />
                  <Button
                    handleClick={() => handleDeleteItem(item.id)}
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
