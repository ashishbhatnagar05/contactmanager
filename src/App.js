import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>App component</h1>
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="John Doe"
            email="johnDoe@gmail.com"
            phone="+918745389201"
          />
          <Contact
            name="Karen Smith"
            email="KarenSmith@gmail.com"
            phone="+919604534235"
          />
        </div>
      </div>
    );
  }
}
export default App;
