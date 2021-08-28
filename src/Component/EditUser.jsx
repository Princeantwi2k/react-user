import React, { Component } from "react";
import { editUser } from "../Action/AddAction";
import { connect } from "react-redux";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: props.users.fullname,
      email: props.users.email,
      gen: props.users.gen,
      contact: props.users.contact,
      id: props.users.id,
    };
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state);
    this.setState({
      fullname: "",
      email: "",
      gen: "",
      contact: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {" "}
        FirstName: <br />
        <input
          name="fullname"
          type="text"
          value={this.state.fullname}
          onChange={this.handleChange}
          placeholder={this.props.name}
        />
        <br />
        Email: <br />
        <input
          type="emailr"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder={this.props.email}
        />
        <br />
        Gen: <br />
        <input
          name="gen"
          type="text"
          value={this.state.gen}
          onChange={this.handleChange}
          placeholder={this.props.gen}
        />
        <br />
        Contact: <br />
        <input
          name="contact"
          type="text"
          value={this.state.contact}
          onChange={this.handleChange}
          placeholder={this.props.contact}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
const mapDispatchToProps = {
  editUser: editUser,
};

export default connect(null, mapDispatchToProps)(EditUser);
