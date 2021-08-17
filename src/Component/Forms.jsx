import React, { Component } from "react";
import "./User.css";
import { connect } from "react-redux";
import { AddAction } from "../Action/AddAction";
class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      contact: "",
      gen: "",
    };
  }
  handleChange = (e) => {
    {
      const name = e.target.name;
      const value = e.target.value;

      this.setState({ [name]: value });
    }
  };
  handelsubmite = (e) => {
    e.preventDefault();
    this.props.NewUSER(this.state);
    this.setState({
      username: "",
      email: "",
      password: "",
      contact: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handelsubmite} className="user">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="fullname"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="password">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="Gen">Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
          />

          <br />
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            name="contact"
            value={this.state.contact}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  NewUSER: AddAction,
};

export default connect(null, mapDispatchToProps)(Forms);
