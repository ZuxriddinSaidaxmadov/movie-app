import React from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
