import { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../../App";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

const Header = () => {
  const homeNav = useRef(null);
  const collectionNav = useRef(null);
  const aboutNav = useRef(null);
  const { selectedPage } = useContext(ShopContext);
  const headerDiv = useRef(null);
  const isScrollDown = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 95) {
        headerDiv.current.style.background = "black";
        isScrollDown.current = true;
      } else {
        headerDiv.current.style.background =
          "linear-gradient(rgba(0, 0, 0, 0.596),transparent)";
        isScrollDown.current = false;
      }
    });
  }, []);

  useEffect(() => {
    if (selectedPage === "/") {
      homeNav.current.className = "activeNav";
      collectionNav.current.className = "";
      aboutNav.current.className = "";
    } else if (selectedPage === "winter-2079-collection") {
      homeNav.current.className = "";
      collectionNav.current.className = "activeNav";
      aboutNav.current.className = "";
    } else if (selectedPage === "about") {
      homeNav.current.className = "";
      collectionNav.current.className = "";
      aboutNav.current.className = "activeNav";
    } else {
      homeNav.current.className = "";
      collectionNav.current.className = "";
      aboutNav.current.className = "";
    }
  }, [selectedPage]);

  return (
    <div
      className="header"
      ref={headerDiv}
      onMouseOver={() => {
        headerDiv.current.style.background = "black";
      }}
      onMouseOut={() => {
        if (!isScrollDown.current) {
          headerDiv.current.style.background =
            "linear-gradient(rgba(0, 0, 0, 0.596),transparent)";
        }
      }}
    >
      <div className="headerLeft">
        <a
          href="https://github.com/johnnynava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/github-white.svg"></img>
          <p>Johnny Nava</p>
        </a>
      </div>
      <div className="headerMiddle">
        <p>BRAND</p>
        <ul className="headerNav">
          <Link to="/">
            <li ref={homeNav}>Home</li>
          </Link>
          <Link to="/winter-2079-collection">
            <li ref={collectionNav}>Collection</li>
          </Link>
          <Link to="/about">
            <li ref={aboutNav}>About</li>
          </Link>
        </ul>
      </div>
      <div className="headerRight">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
