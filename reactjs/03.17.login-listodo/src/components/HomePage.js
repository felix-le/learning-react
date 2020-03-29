import React, { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  /** tagert: show list users
   *  api: 
        https://5e7b593d0e04630016333185.mockapi.io/api/v1/users
        https://5e7b593d0e04630016333185.mockapi.io/api/v1/todos
   
    1/ get users
      * we will import axios libs to call api. (npm install axios)

    2/ Homework
      * Make register page follow the login page format
      * Show loading when call api, after call success hide loading.
      *  research: async/await: https://www.youtube.com/watch?v=5YjhwokfHGM
      */

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // way 1: promise
      // axios.get('https://5e7b593d0e04630016333185.mockapi.io/api/v1/users').then(res => {
      //   console.log('====use promise====', res)
      // });

      // way 2: async/await
      const res = await axios.get(
        "https://5e7b593d0e04630016333185.mockapi.io/api/v1/users"
      );
      setUsers(res.data);
      console.log(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Home Page</h1>
      <h2>Show list users</h2>
      {users.length ? (
        users.map((item, index) => {
          return (
            <li key={item.id}>
              <label className="name_user">{item.name}</label>
              <p>{item.password}</p>
            </li>
          );
        })
      ) : (
        <div>'No thing to show'</div>
      )}
    </>
  );
}

export default HomePage;
