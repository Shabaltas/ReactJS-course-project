import {connect} from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        data: state.navbar
    }
};
const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps())(Navbar);