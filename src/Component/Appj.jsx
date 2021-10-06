import React from "react";
import Forms from "./Forms";
import User from "./Userlist";
import { useHistory } from "react-router";
import { connect, useDispatch } from "react-redux";
import { logout } from "./AuthAction/Auth";
const Appj = (props) => {
  const dispatch = useDispatch();
  const { replace } = useHistory();
  return (
    <div>
      <button onClick={() => dispatch(logout(replace))}>Logout</button>
      <User />
      <Forms />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps)(Appj);
