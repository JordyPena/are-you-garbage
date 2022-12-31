import { AiFillInstagram, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import "../footer/Footer.css";
const Footer = ({ screenWidth }) => {
  return (
    <footer>
      <section className="footer-link-container">
        <a
          href="https://www.instagram.com/areyougarbage/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="footer-icons" />
          <p className="footer-text">@areyougarbage</p>
        </a>
        {screenWidth > 831 && (
          <>
            <a
              href="https://twitter.com/AreYouGarbage?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="media-icons" />
            </a>
          </>
        )}
        <a
          href="https://www.instagram.com/hfoleycomedy/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="footer-icons" />
          <p className="footer-text">@hfoleycomedy</p>
        </a>
        {screenWidth > 831 && (
          <>
            <a href="mailto:areyougarbage@gmail.com">
              <AiFillMail className="media-icons" />
            </a>
          </>
        )}
        <a
          href="https://www.instagram.com/kevinryancomedy/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className="footer-icons" />
          <p className="footer-text">@kevinryancomedy</p>
        </a>
      </section>
      <div className="media-container">
        {screenWidth < 831 && (
          <>
            <a
              href="https://twitter.com/AreYouGarbage?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineTwitter className="media-icons" />
            </a>
            <a href="mailto:areyougarbage@gmail.com">
              <AiFillMail className="media-icons" />
            </a>
          </>
        )}
      </div>
      <div className="copyright-container">
        <p className="copyright-styles">&copy;2022 by AreYouGarbage</p>
      </div>
    </footer>
  );
};
export default Footer;
