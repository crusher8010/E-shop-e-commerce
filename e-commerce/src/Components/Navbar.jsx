import Sidebar from "./Sidebar";
import { useState, useContext } from "react";
import "./Navbar.css";
import { FaStore, FaShoppingCart } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth/AuthContext";
import { logoutAction } from "../Context/Auth/action";

function Navbar() {
  const [mob, setMob] = useState(false);
  let { state, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutAction());
    if (!state.isAuth) {
      navigate("/login")
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="temp">
          <Sidebar />
        </div>
        <Link to="/"><FaStore className="d1" /></Link>
        <Link tp="/"><h1 className="d2">ESHOP</h1></Link>
      </div>
      <div className="cat">
        <div className="jerry">
          <input
            style={{
              border: "1px solid",
              width: "100%",
              padding: "6px",
              borderRadius: "12px",
            }}
            width="100%"
            type="text"
            placeholder="Search an item"
          />
        </div>
        {mob ? <div className="tom">
          <h1>Mens</h1>
          <h1>Womens</h1>
          <h1>Childrens</h1>
        </div> : ""}

      </div>
      <div className="req1">
        <div className="r1">
          <Link to="/login"><h1>Login | SignUp</h1></Link>
          <Link to="/cart"><FaShoppingCart fontSize="25px" /></Link>
          <Link className="logout" onClick={logoutHandler}><b>Log Out</b></Link>
        </div>
        {mob ? (
          <div className="r2">
            <h1>Login | SignUp</h1>
            <h1>Cart</h1>
          </div>
        ) : (
          ""
        )}
      </div>

      <button className="mobile-menu-icon" onClick={() => setMob(!mob)}>
        {mob ? (
          <CloseIcon fontSize={"20px"} />
        ) : (
          <HamburgerIcon />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
