import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎦Movie Nation🎦
    </span>
  );
};

export default Header;