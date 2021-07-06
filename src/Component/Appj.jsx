import React, { Component } from "react";
import Forms from "./Forms";

import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          fullname: "prince",
          email: "antwi2k@gmail.com",
          gen: 23,
          contact: "09873944330",
        },

        {
          fullname: "antwi",
          email: "prince@email.com",
          gen: 4,
          contact: "02311398390",
        },
        {
          fullname: "eunege",
          email: "eunege@email.com",
          gen: 7,
          contact: "0987398390",
        },
      ],
    };
  }
  handleAddUser = (user) => {
    this.setState({ users: [...this.state.users], user });
  };

  render() {
    return (
      <>
        <User users={this.state.users} />
        <Forms adduser={this.handleAddUser} />
      </>
    );
  }
}

export default App;
