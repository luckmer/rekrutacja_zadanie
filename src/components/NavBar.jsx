import React from "react";
import { SetFilterLike } from "../redux/reducers/ButtonSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const status = useSelector((state) => state.buttons.start);
  const dispatch = useDispatch();

  const handleFilter = () => dispatch(SetFilterLike(!status));

  return (
    <nav className="nav_Container">
      <div className="nav_div">
        <ul>
          <Link to="/">
            <button className="nav_button">Home</button>
          </Link>
        </ul>
        <ul
          className={status === true ? "nav_login On" : "nav_login"}
          onClick={handleFilter}
        >
          <li>favorite</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
