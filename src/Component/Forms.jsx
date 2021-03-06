import React, { Component } from "react";
import "./User.css";
import { AddAction, getALLusers } from "../Action/AddAction";
import { connect } from "react-redux";
import { logout } from "./AuthAction/Auth";

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

  componentDidMount() {
    this.props.getALLusers();
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };
  handelsubmite = (e) => {
    e.preventDefault();
    this.props.NewUSER(this.state);
    this.setState({
      fullname: "",
      email: "",
      gen: "",
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
            value={this.state.fullname}
            onChange={this.handleChange}
            required
          />
          <br />
          <label htmlFor="password">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          <label htmlFor="Gen">Gen</label>
          <input
            type="number"
            name="gen"
            value={this.state.gen}
            onChange={this.handleChange}
            required
          />

          <br />
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            name="contact"
            value={this.state.contact}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type="submit">Submit </button>
        </form>

        <button onClick={this.props.logout}>logOut</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  NewUSER: AddAction,
  getALLusers: getALLusers,
  logout: logout,
};
export default connect(null, mapDispatchToProps)(Forms);
