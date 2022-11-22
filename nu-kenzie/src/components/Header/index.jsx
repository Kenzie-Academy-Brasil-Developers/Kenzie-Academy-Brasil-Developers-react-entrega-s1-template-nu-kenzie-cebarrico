import "./header.css";
import logo from "../../img/nukenzieb.svg";

export const ProfileHeader = ({ setLoginIsTrue }) => {
  return (
    <header className="nav-header" style={{ justifyContent: "center" }}>
      <nav>
        <img src={logo} alt="" />
        <button className="logout-btm" onClick={() => setLoginIsTrue(false)}>
          Inicio
        </button>
      </nav>
    </header>
  );
};
