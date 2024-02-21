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
import ProtectedRoute from "./ProtectedRoute";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        {!props.loggedOut && (
          <div>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Login />} />
                <Route
                  path="/dashboard"
                  exact
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/leaderboard"
                  exact
                  element={
                    <ProtectedRoute>
                      <Leaderboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/newQuestion"
                  exact
                  element={
                    <ProtectedRoute>
                      <NewQuestion />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/question/:id"
                  element={
                    <ProtectedRoute>
                      <Question />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" exact element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedOut: authedUser === null,
});

export default connect(mapStateToProps)(App);
