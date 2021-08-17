import React from "react";
import { connect } from "react-redux";

const User = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            <h3>Fullname :{user.fullname}</h3>
            <p>email :{user.email}</p>
            <p>gen :{user.gen}</p>
            <p>contact : {user.contact}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(User);
