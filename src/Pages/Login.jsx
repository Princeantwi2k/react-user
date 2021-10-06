import React from "react";
import { login } from "../Component/AuthAction/Auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../Component/User.css";

const Login = () => {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(login(email, password, replace));
    console.log(dispatch);
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
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(Login);
