import media360Logo from "../assets/media360_logo.png";

function HeaderNav({ hasBackground }) {
  var style = null;

  if (hasBackground) {
    style = { background: "var(--accent-color)" };
  }

  return (
    <header className="header-nav" style={style}>
      <a href="/" className="nav-tab">
        Hizmetlerimiz
      </a>
      <a href="/">
        <img src={media360Logo} width={"200px"} alt="" />
      </a>
      <a href="/" className="nav-tab">
        Hakkımızda
      </a>
    </header>
  );
}

export default HeaderNav;
