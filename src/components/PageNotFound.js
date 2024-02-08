import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div>
      <h1>You will need to log in to access that page</h1>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
}

export default PageNotFound;
