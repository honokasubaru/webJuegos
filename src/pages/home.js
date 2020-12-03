import React from "react";
import Navbar from "../components/navbar.js";
import Slider from "../components/slider.js";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Slider />
      </React.Fragment>
    );
  }
}

export default Home;
