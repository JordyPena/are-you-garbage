import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaPatreon, FaYoutube, FaTshirt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../menu/Menu.css";
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navBar">
      {!isMenuOpen && (
        <button onClick={menuClicked}>{<HiMenu size="25px" />}</button>
      )}
      <div className={`menuNav ${isMenuOpen && "showMenu"}`}>
        <span className="close" onClick={menuClicked}>
          <AiOutlineClose size="25px" />
        </span>
        <div className="menuItems">
          <ul>
            <li>
              <Link to="/" style={{textDecoration: 'none'}}>
                <FaHome size="25px" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/special" style={{textDecoration: 'none'}}>
                <BsFillStarFill size="25px" />
                <span>Special</span>
              </Link>
            </li>
            <li>
              <Link to="/liveShows" style={{textDecoration: 'none'}}>
                <GiTicket size="25px" />
                <span>Live Shows</span>
              </Link>
            </li>
            <li>
              <a target="_blank" href="https://www.patreon.com/AreYouGarbage">
                <FaPatreon size="25px" />
                <span>Patreon</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.youtube.com/c/AreYouGarbageComedyPodcast/featured">
                <FaYoutube size="25px" />
                <span>Youtube</span>
              </a>
            </li>
            <li>
              <a target="_blank" href='https://www.bonfire.com/store/are-you-garbage/'>
                <FaTshirt size="25px" />
                <span>Merch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
