import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>App component</h1>
          <Header branding="Contact Manager" />
          <div className="container">
           <AddContact/>
           <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
