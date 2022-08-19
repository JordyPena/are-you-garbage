import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaPatreon, FaYoutube, FaTshirt } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { useState } from "react";
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
              <FaHome size="25px" />
              <span>Home</span>
            </li>
            <li>
              <BsFillStarFill size="25px" />
              <span>Special</span>
            </li>
            <li>
              <GiTicket size="25px" />
              <span>Live Shows</span>
            </li>
            <li>
              <FaPatreon size="25px" />
              <span>Patreon</span>
            </li>
            <li>
              <FaYoutube size="25px" />
              <span>Youtube</span>
            </li>
            <li>
              <FaTshirt size="25px" />
              <span>Merch</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
