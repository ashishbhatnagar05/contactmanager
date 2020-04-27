import React, { Component } from "react";

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

onSubmit= e=>{
    e.preventDefault();
    console.log(this.state);
}

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add COntact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
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
  }
}
export default AddContact;
