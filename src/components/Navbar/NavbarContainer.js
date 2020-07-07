import {connect} from "react-redux";
import Navbar from "./Navbar";
import {getFriends} from "../../selectors/stateSelector";

const mapStateToProps = (state) => {
    return {
        friends: getFriends(state)
    }
};
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
