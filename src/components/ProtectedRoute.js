import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const ProtectedRoute = ({children, loggedIn}) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];
    console.log(redirectUrl)
    return loggedIn ? children : <Navigate to={`/?redirectTo=${redirectUrl}`}/>;
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(ProtectedRoute);
