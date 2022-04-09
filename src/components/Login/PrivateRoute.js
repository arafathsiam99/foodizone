import React from "react";
import { Redirect, Route } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase/useFirebase";

function PrivateRoute({ children, ...rest }) {
  const { user, isLoading } = useFirebase();
  if (isLoading) {
    return <div>Loading............</div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
