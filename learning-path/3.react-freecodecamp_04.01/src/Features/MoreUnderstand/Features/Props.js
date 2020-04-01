import React from "react";
import ContactCard from "./components/ContactCard";

function Props() {
  return (
    <div>
      <ContactCard
        contact={{urlImg:"https://bit.ly/2wHlTPb",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
      <ContactCard
        contact={{urlImg:"https://bit.ly/2QYoWsT",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
      <ContactCard
        contact={{urlImg:"https://bit.ly/2UMwHDy",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
      <ContactCard
        contact={{concacturlImg:"https://bit.ly/2UxlveX",
        name:"Mr. Whiskerson",
        phone:"(212) 555-1234",
        email:"Mrwhiskaz@catnap.meow"}}
      />
    </div>
  );
}
export default Props;
