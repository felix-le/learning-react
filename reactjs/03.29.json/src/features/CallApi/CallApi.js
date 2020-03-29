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
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState({
    name: ""
  });

  useEffect(() => {
    setTimeout(async () => {
      const fetchUsers = async () => {
        const res = await axios.get("http://localhost:4000/posts/");
        setUsers(res.data);
      };
      fetchUsers();
    }, 100);
  }, []);

  const handleReadMoreItem = id => {
    props.history.push(`/detail-item/${id}`);
  };
  // Truyền tham số trả về cho Components ở App.
  const handleDeleteItem = id => {
    const removeArr = users.filter(item => item.id !== id);
    setUsers(removeArr);
  };

  // Bug to vai dai, Filter lỗi nhé. éo đỡ được , éo biết fix kakakak~~~~~~
  const handleSearchValue = event => {
    const { value } = event.target;
    if (value !== "") {
      setSearchValue({
        ...searchValue,
        name: value
      });
    }
    const stringSearch = searchValue.name.toLowerCase().substr(0, 20);
    const dataTitle = users.map(item => item.title.toLowerCase());
    console.log("dataTitle", dataTitle);
    console.log("stringSearch", stringSearch);

    let filterData = dataTitle.filter(el => {
      return el.indexOf(stringSearch) !== -1;
    });
    console.log(filterData)
  };
// Bug to vai dai, Filter lỗi nhé. éo đỡ được , éo biết fix kakakak!~~~~~~~~~


  const handleSubmitSearch = event => {
    event.preventDefault();
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
              value={searchValue.name}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary search-btn"
                onClick={handleSubmitSearch}
              >
                <img src="https://md-aqil.github.io/images/Search.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul id="todoList">
        {users.length ? (
          users.map(item => {
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
