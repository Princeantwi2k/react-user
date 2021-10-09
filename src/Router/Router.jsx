import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Appj from "../Component/Appj";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import ProtectedRoute from "../Component/ProtectedRoute/ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <ProtectedRoute exact path="/" component={Appj} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Registration} />
    </BrowserRouter>
  );
};

export default Router;
