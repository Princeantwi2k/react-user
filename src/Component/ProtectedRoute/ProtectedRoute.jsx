import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
const Protectedroute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isloaded && !auth.isEmpty) {
          return <Component />;
        } else if (!auth.isLoaded) return <h1>Loading...</h1>;
        else return <Redirect to="/login" />;
      }}
    />
  );
};
const mapStateToProps = (state) => ({ auth: state.firebase.auth });

export default connect(mapStateToProps)(Protectedroute);
