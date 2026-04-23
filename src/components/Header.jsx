import "./Header.css";
import { useEffect, useState } from "react";

import SearchIcon from "../icons/SearchIcon";
import UserIcon from "../icons/UserIcon";
import CartIcon from "../icons/CartIcon";
import LocationIcon from "../icons/LocationIcon";
import HamburgerIcon from "../icons/Hamburger";
import CloseIcon from "../icons/Close";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header_inner">
        <div className="header_logo">Fender</div>

        <button
          className="header_menuButton"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((value) => !value)}
        >
          <HamburgerIcon />
        </button>

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

      <nav className={`header_mobileNav ${isMenuOpen ? "open" : ""}`}>
        <div className="header_mobileNavTop">
          <div className="header_mobileNavLogo">Fender</div>
          <button
            className="header_mobileNavClose"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="header_mobileNavList">
          <li>
            <a href="#" className="header_mobileNavLink">
              New
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Mod Shop
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Electric Guitars
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Basses
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Acoustics
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Squier
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Amps & Effects
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Parts
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Accessories & Merch
            </a>
          </li>
          <li>
            <a href="#" className="header_mobileNavLink">
              Recording
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;