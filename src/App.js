import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>App component</h1>
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
