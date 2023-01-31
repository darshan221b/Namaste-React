import Profile from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
    // this.timer = setInterval(() => {
    //   console.log("Hello World");
    // }, 1000);
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius{" "}
        </p>
        <Profile name="Darshan" />
      </div>
    );
  }
}

export default About;
