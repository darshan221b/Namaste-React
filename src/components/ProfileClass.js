import { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "ABC",
        location: "Hubli",
      },
    };
    console.log("child - constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/darshan221b");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("child - componentDidMount");
  }

  componentDidUpdate() {
    console.log("child - componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("child - componentWillUnmount");
  }

  render() {
    const { name, location, avatar_url } = this.state?.userInfo;
    console.log("child - render");
    return (
      <div>
        <h1>Profile from CLASSSSS</h1>
        <img src={avatar_url} alt="profile-pic" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default Profile;
