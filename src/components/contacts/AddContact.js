import React, { Component } from "react";
import { Consumer } from "../../context";
import { v4 as uuidv4 } from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onContactChange = (e) =>
    this.setState({
      [e.target.name]: [e.target.value],
    });

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add COntact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name......"
                      value={name}
                      onChange={this.onContactChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email......"
                      value={email}
                      onChange={this.onContactChange}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone......"
                      value={phone}
                      onChange={this.onContactChange}
                    ></input>
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block"
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
