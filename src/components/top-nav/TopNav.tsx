import '../top-nav/TopNav.css';
import banner from "../../images/banner.jpg";
const Topnav = () => {
  return (
    <header data-testid="header">
      <img src={banner} alt="two men" className="banner" />
    </header>
  );
}
export default Topnav;