import "./Header.css";

import SearchIcon from "../icons/SearchIcon";
import UserIcon from "../icons/UserIcon";
import CartIcon from "../icons/CartIcon";
import LocationIcon from "../icons/LocationIcon";

function Header() {
  return (
    <header className="header">
      <div className="header_inner">
        <div className="header_logo">Fender</div>

        <div className="header_search">
          <SearchIcon className="header_searchIcon" />
          <input
            className="header_input"
            type="text"
            placeholder="What can we help you find?"
          />
        </div>

        <div className="header_icons">
          <button className="header_iconButton" aria-label="Location">
            <LocationIcon />
          </button>

          <button className="header_iconButton" aria-label="Account">
            <UserIcon />
          </button>

          <button className="header_iconButton" aria-label="Cart">
            <CartIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;