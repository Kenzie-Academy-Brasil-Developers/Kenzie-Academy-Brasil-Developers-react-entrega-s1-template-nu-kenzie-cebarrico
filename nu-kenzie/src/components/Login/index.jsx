import "./login.css";
import logo from "../../img/nukenzie.svg";
import loginImg from "../../img/loginimg.png";

export const Login = ({ setLoginIsTrue }) => {
  return (
    <div className="app">
      <main className="container">
        <section className="login">
          <img src={logo} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button className="btm-login" onClick={() => setLoginIsTrue(true)}>
            Iniciar
          </button>
        </section>
        <section>
          <img className="login-img" src={loginImg} alt="" />
        </section>
      </main>
    </div>
  );
};
