import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue} from "./Stateprovider";
import {auth} from "./firebase";

function Header() {
  const handleAuthentication=()=>{
    if (user)
    {
      auth.signOut();
    }

  }
  const [{ basket,user}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="headerlogo"
        />
      </Link>

      <div className="header-search">
        <input className="header_searchinput" type="text"></input>
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="header_navBar">
        <Link to={!user && "/login"}>
        <div className="headerOption" onClick={handleAuthentication}>
          <span className="headerOptionLine1">{user ? <span>Hello, {user.email.split('@')[0]}</span> :'Hello Guest'}</span>
          <span className="headerOptionLine2">{user ? 'Sign Out':'Sign In'}</span>
        </div>
        </Link>
        <div className="headerOption">
          <span className="headerOptionLine1">Returns</span>
          <span className="headerOptionLine2">& Orders</span>
        </div>
        <div className="headerOption">
          <span className="headerOptionLine1">Your</span>
          <span className="headerOptionLine2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="headerBasket">
            <ShoppingBasketIcon className="basketIcon" />
            <span className="headerOptionLine2 headerBasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
