import React from "react";
import { registration } from "../Component/AuthAction/Auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../Component/User.css";

const Registration = () => {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(registration(email, password, replace));
    console.log(dispatch);
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

export default Registration;
