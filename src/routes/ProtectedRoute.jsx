import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  console.log("loading........sadad", loading);
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (loading === false && !isAuthenticated) {
            return <Redirect to="/" />;
          }

          return <Component {...props} />;
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
