import media360Logo from "../assets/media360_logo.png";

function AppFooter() {
  return (
    <footer className="app-footer">
      <a href="">
        <img src={media360Logo} width={"200px"} alt="" />
      </a>
      <div className="footer-nav">
        <a href="" className="nav-tab">
          Services
        </a>
        <a href="" className="nav-tab">
          Contanct
        </a>
        <a href="" className="nav-tab">
          About Us
        </a>
      </div>
      <h3>© Media360 - Tüm Haklarımız Saklıdır.</h3>
    </footer>
  );
}

export default AppFooter;
