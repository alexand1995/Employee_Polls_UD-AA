import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div>
      <h1>No question with that ID was found.</h1>
      <Link to="/dashboard">Back To Dashboard</Link>
    </div>
  );
}

export default PageNotFound;
