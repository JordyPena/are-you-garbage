import { AiFillInstagram, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import "../footer/Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="media-container">
        <a
          href="https://twitter.com/AreYouGarbage?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
        >
          <AiOutlineTwitter className="media-icons" />
        </a>
        <a href="mailto:areyougarbage@gmail.com">
          <AiFillMail className="media-icons" />
        </a>
      </div>
      <section className="footer-link-container">
        <a href="https://www.instagram.com/areyougarbage/" target="_blank">
          <AiFillInstagram className="footer-icons" />
          <p className="footer-text">@areyougarbage</p>
        </a>
        <a href="https://www.instagram.com/hfoleycomedy/" target="_blank">
          <AiFillInstagram className="footer-icons" />
          <p className="footer-text">@hfoleycomedy</p>
        </a>
        <a href="https://www.instagram.com/kevinryancomedy/" target="_blank">
          <AiFillInstagram className="footer-icons" />
          <p className="footer-text">@kevinryancomedy</p>
        </a>
      </section>
      <div className="copyright-container">
        <p className="copyright-styles">&copy;2022 by AreYouGarbage</p>
      </div>
    </footer>
  );
};
export default Footer;
