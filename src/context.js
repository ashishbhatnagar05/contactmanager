import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
