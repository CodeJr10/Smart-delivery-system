// import React from 'react'

import Dashboard from "./Dashboard";
import Login from "../auth/login";

const Homepage = () => {
  const isUserLoggedIn = false;

  return <div>{isUserLoggedIn ? <Dashboard /> : <Login />}</div>;
};

export default Homepage;
