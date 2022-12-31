import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaPatreon, FaYoutube, FaTshirt } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../menu/Menu.css";
const Menu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  useEffect(() => {
    if (typeof window !== "undefined" && window.document) {
      document.body.style.overflow = sidebar === true ? "hidden" : "unset";
    }
  }, [sidebar]);
  return (
    <>
      <div className="ayg-banner">
        <img
          src={`${process.env.PUBLIC_URL}/images/banner.jpg`}
          className="ayg-banner-img"
          alt="two guys"
        />
      </div>
      <div className="navbar">
        {!sidebar && (
          <Link to="#" className="menu-bar-hamburger-container" onClick={showSidebar}>
            <HiMenu className="menu-bar-hamburger-icon" />
          </Link>
        )}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <Link to="#" className="menu-bar-x-container" onClick={showSidebar}>
          <AiOutlineClose className="menu-bar-x-icon" />
        </Link>
        <ul className="nav-menu-items">
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/images/titleLogo.png`}
              className="nav-menu-img"
              alt="Are You Garbage?"
            />
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/">
              <FaHome className="link-style" />{" "}
              <p className="dark-mode-style">Home</p>
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <Link to="/liveShows">
              <GiTicket className="link-style" />{" "}
              <p className="dark-mode-style">Live Shows</p>
            </Link>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <a
              target="_blank"
              href="https://www.patreon.com/AreYouGarbage"
              rel="noreferrer"
            >
              <FaPatreon className="link-style" />{" "}
              <p className="dark-mode-style">Patreon</p>
            </a>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <a
              target="_blank"
              href="https://www.youtube.com/c/AreYouGarbageComedyPodcast/featured"
              rel="noreferrer"
            >
              <FaYoutube className="link-style" />{" "}
              <p className="dark-mode-style">Episodes</p>
            </a>
          </li>
          <li className="nav-text" onClick={showSidebar}>
            <a
              target="_blank"
              href="https://www.bonfire.com/store/are-you-garbage/"
              rel="noreferrer"
            >
              <FaTshirt className="link-style" />{" "}
              <p className="dark-mode-style">Merch</p>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Menu;
