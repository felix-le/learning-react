import React from "react";
import ContactCardItem from "./ContactCardItem";

function ContactCard() {
  return (
    <div>
      <ContactCardItem
        contact={{urlImg:"https://bit.ly/2wHlTPb",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
      <ContactCardItem
        contact={{urlImg:"https://bit.ly/2QYoWsT",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
      <ContactCardItem
        contact={{urlImg:"https://bit.ly/2UMwHDy",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
      <ContactCardItem
        contact={{concacturlImg:"https://bit.ly/2UxlveX",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
    </div>
  )
}

export default ContactCard;
