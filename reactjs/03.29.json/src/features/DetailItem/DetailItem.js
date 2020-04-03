import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailItem = () => {
  let { id } = useParams();
  // Nhận id từ URL
  const [item, setItem] = useState({});
  useEffect(() => {
    setTimeout(async () => {
      const fetchUsers = async () => {
        const res = await axios.get(`http://localhost:4000/posts/${id}`);
        setItem(res.data);
      };
      fetchUsers();
    }, 100);
  }, [id]);

  return (
    <>
      {Object.keys(item).length > 0 ? (
        <li key={item.id} className="well">
          <h1>{item.id}</h1>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ) : null}
    </>
  );
};
export default DetailItem;
