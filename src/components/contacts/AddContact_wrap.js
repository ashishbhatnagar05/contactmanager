import React, { Component } from "react";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
      };
    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }

onSubmit= e=>{
    e.preventDefault();
    const contact={
        name: this.nameInput.current.value,
        email: this.emailInput.current.value,
        phone: this.phoneInput.current.value
    }
    console.log(contact);
}

static defaultProps={
    name:'ashish',
    email:'ashish@gmail.com',
    phone:'777-777-7777'
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
                defaultValue={name}
                ref={this.nameInput}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email......"
                defaultValue={email}
                ref={this.emailInput}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone......"
                defaultValue={phone}
                ref={this.phomeInput}
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
