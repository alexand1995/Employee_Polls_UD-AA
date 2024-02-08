import authedUser from "../reducers/authedUser";
import { connect } from "react-redux";

const Testing = (props) => {
  console.log(props.authedUser);
  return <div>testing</div>;
};

const mapStateToProps = ({ authedUser, users, tweets }) => {
  return {
    authedUser,
    users,
    tweets,
  };
};
export default connect(mapStateToProps)(Testing);
