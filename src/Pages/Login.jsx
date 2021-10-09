import React from "react";
import { login } from "../Component/AuthAction/Auth";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../Component/User.css";

const Login = (props) => {
  if (!props.auth.isLoaded) return null;

  if (props.auth.uid) props.history.push("/");

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    props.login(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="login">
        <label className="email">Email</label>
        <input type="email" name="email" required className="input" />
        <br />
        <label className="email">Password</label>
        <input type="password" name="password" required className="input" />
        <br />
        <button type="submit" className="btn-primary">
          submit
        </button>
        <Link to="/register">Don't have an account? Sign up </Link>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
});
const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
