import media360Logo from "../assets/media360_logo.png";

function HeaderNav() {
  return (
    <header className="header-nav">
      <a href="" className="nav-tab">
        Services
      </a>
      <a href="">
        <img src={media360Logo} width={"200px"} alt="" />
      </a>
      <a href="" className="nav-tab">
        About Us
      </a>
    </header>
  );
}

export default HeaderNav;
