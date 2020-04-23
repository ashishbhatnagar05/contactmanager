import React from "react";
import Contact from './components/Contact'
import Header from './components/Header'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>App component</h1>
        <Header/>
        <Contact/>
      </div>
    );
  }
}
export default App;
