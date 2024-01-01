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
  const brandTitle = useRef(null);
  const githubLogo = useRef(null);
  const githubName = useRef(null);
  const bagLogo = useRef(null);
  const shoppingCartNumBox = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 95) {
        headerDiv.current.style.background = "white";
        brandTitle.current.style.color = "black";
        homeNav.current.style.color = "black";
        collectionNav.current.style.color = "black";
        aboutNav.current.style.color = "black";
        githubName.current.style.color = "black";
        githubLogo.current.src = "/src/assets/github-black.svg";
        bagLogo.current.src = "/src/assets/purse-black.svg";
        shoppingCartNumBox.current.style.color = "black";
        shoppingCartNumBox.current.style.border = "1px solid black";
        isScrollDown.current = true;
      } else {
        headerDiv.current.style.background =
          "linear-gradient(rgba(0, 0, 0, 0.596),transparent)";
        brandTitle.current.style.color = "white";
        homeNav.current.style.color = "white";
        collectionNav.current.style.color = "white";
        aboutNav.current.style.color = "white";
        githubName.current.style.color = "white";
        githubLogo.current.src = "/src/assets/github-white.svg";
        bagLogo.current.src = "/src/assets/purse-white.svg";
        shoppingCartNumBox.current.style.color = "white";
        shoppingCartNumBox.current.style.border = "1px solid white";
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
        headerDiv.current.style.background = "white";
        brandTitle.current.style.color = "black";
        homeNav.current.style.color = "black";
        collectionNav.current.style.color = "black";
        aboutNav.current.style.color = "black";
        githubName.current.style.color = "black";
        githubLogo.current.src = "/src/assets/github-black.svg";
        bagLogo.current.src = "/src/assets/purse-black.svg";
        shoppingCartNumBox.current.style.color = "black";
        shoppingCartNumBox.current.style.border = "1px solid black";
      }}
      onMouseOut={() => {
        if (!isScrollDown.current) {
          headerDiv.current.style.background =
            "linear-gradient(rgba(0, 0, 0, 0.596),transparent)";
          brandTitle.current.style.color = "white";
          homeNav.current.style.color = "white";
          collectionNav.current.style.color = "white";
          aboutNav.current.style.color = "white";
          githubName.current.style.color = "white";
          githubLogo.current.src = "/src/assets/github-white.svg";
          bagLogo.current.src = "/src/assets/purse-white.svg";
          shoppingCartNumBox.current.style.color = "white";
          shoppingCartNumBox.current.style.border = "1px solid white";
        }
      }}
    >
      <div className="headerLeft">
        <a
          href="https://github.com/johnnynava"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/src/assets/github-white.svg" ref={githubLogo}></img>
          <p ref={githubName}>Johnny Nava</p>
        </a>
      </div>
      <div className="headerMiddle">
        <p ref={brandTitle}>BRAND</p>
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
        <ShoppingCart
          bagLogo={bagLogo}
          shoppingCartNumBox={shoppingCartNumBox}
        />
      </div>
    </div>
  );
};

export default Header;
