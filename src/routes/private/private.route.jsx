import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated, isLoading);

  // This is to fix a bug that happens when a user enter 'checkout' directly to the URL it redirect the user to the home page even when they are logged in
  if (isLoading) {
    return <></>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
