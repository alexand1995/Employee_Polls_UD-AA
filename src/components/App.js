//import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import Question from "./Question";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        {props.authedUser === null ? (
          
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
          
          </BrowserRouter>
        ) : (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/newQuestion" element={<NewQuestion />} />
                <Route path="/question/:id" element={<Question />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
  authedUser
});

export default connect(mapStateToProps)(App);
