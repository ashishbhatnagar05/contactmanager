import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "+9187345349854",
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "KarenSmith@gmail.com",
        phone: "+9184565349854",
      },
      {
        id: 3,
        name: "Shawn Parker",
        email: "ShawnParker@gmail.com",
        phone: "+9180345349854",
      },
    ],
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
