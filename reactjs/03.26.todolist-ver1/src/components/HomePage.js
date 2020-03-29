import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/style.css";
/** tagert: show list users
   *  api: 
        https://5e7b593d0e04630016333185.mockapi.io/api/v1/users
        https://5e7b593d0e04630016333185.mockapi.io/api/v1/todos
   
    1/ get users
      * we will import axios libs to call api. (npm install axios)

    2/ Homework
      * Make register page allow login page format
      * Show loading when call api, after call success hide loading.
      *  research: async/await: https://www.youtube.com/watch?v=5YjhwokfHGM
      */

function HomePage() {
  const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      const fetchUsers = async () => {
        const res = await axios.get(
          "https://5e7b593d0e04630016333185.mockapi.io/api/v1/todos"
        );
        setUsers(res.data);
      };
      fetchUsers();
    }, 1000);
  }, []);
  return (
    <div className="homepage-wrapper">
      <h1>Home Page</h1>
      {users.length ? (
        users.map((item, index) => {
          return (
            <li key={item.id}>
              <label className="name_user">{item.name}</label>
            </li>
          );
        })
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}
export default HomePage;
