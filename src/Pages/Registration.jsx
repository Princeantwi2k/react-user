import React from "react";
import { registration } from "../Component/AuthAction/Auth";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "../Component/User.css";

const Registration = (props) => {
  if (!props.auth.isLoaded) return null;
  if (props.auth.uid) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.registration(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="logins">
        <label className="email">Email</label>
        <input type="email" name="email" required className="input" />
        <br />
        <label className="email">Password</label>
        <input type="password" name="password" required className="input" />
        <br />
        <button type="submit" className="btn-primary">
          submit
        </button>
        <Link to="/login">Already have an accout? Sign in </Link>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.firebase.auth };
};
const mapDispatchToProps = {
  registration,
};
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
