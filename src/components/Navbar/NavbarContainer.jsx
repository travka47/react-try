import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    linkData: state.sidebar.linkData,
    friendData: state.sidebar.friendData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
