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
const CallApi = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      // JSON.parse(localStorage.getItem("formValue"));
      const fetchUsers = async () => {
        const res = await axios.get("http://localhost:4000/posts/");
        // console.log(res.data);
        setUsers(res.data);
      };
      fetchUsers();
    }, 100);
  }, []);

  const handleClick = id => {
      props.history.push(`/detail-item/${id}`)
  };
  // Truyền tham số trả về cho Components ở App.

  return (
    <>
      <h1> this is call api page </h1>
      <h3>List Item</h3>
      {users.length
        ? users.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Button handleClick={ () => handleClick(item.id)} />
              </li>
            );
          })
        : null}
    </>
  );
};
export default CallApi;
