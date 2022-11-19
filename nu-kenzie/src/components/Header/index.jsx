import "./header.css";
import logo from "../../img/nukenzieb.svg";

export const ProfileHeader = ({ setLoginIsTrue }) => {
  return (
    <nav>
      <img src={logo} alt="" />
      <button className="logout-btm" onClick={() => setLoginIsTrue(false)}>
        Inicio
      </button>
    </nav>
  );
};
