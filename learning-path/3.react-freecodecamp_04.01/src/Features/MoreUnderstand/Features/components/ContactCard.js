import React from "react";

function ContactCard(props) {
  var { urlImg, name, phone, email } = props.contact;
  return (
    <div>
      <div className="contact-card">
        <img
          src={urlImg}
          alt=""
          style={{ height: "auto", width: "300px" }}
        />
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default ContactCard;
