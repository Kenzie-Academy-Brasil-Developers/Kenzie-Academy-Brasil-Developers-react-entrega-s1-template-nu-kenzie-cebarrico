import { useState } from "react";
import uuid from "react-uuid";
import trash from "./img/trash.svg";
import logo from "../src/img/nukenzie.svg";
import loginImg from "../src/img/loginimg.png";
import { Login } from "./components/Login";
import {
  ProfileHeader,
  FormMain,
  Balance,
  HeaderMain,
} from "./components/Profile";
import "./css/globalStyles.css";
import "./App.css";

const Page = () => {
  const [activities, setActivities] = useState([]);
  const [loginIsTrue, setLoginIsTrue] = useState(false);
  const [listFilter, setListFilter] = useState("Todos");
  const entry = activities.filter((activity) => activity.entry === "Entrada");
  const out = activities.filter((activity) => activity.entry === "Despesas");
  let selectedArray = [];
  if (listFilter === "Todos") {
    selectedArray = activities;
  }
  if (listFilter === "Entrada") {
    selectedArray = entry;
  }
  if (listFilter === "Despesas") {
    selectedArray = out;
  }

  const Render = () => {
    function removeList(index) {
      const newList = index;
      setActivities(activities.filter((list) => list.id !== newList));
    }

    if (activities.length > 0) {
      return (
        <ul>
          {selectedArray.map((activity, index) => (
            <li id={activity.id} key={index} className={activity.entry}>
              <div>
                <h2>{activity.name}</h2>
                <div>
                  <p>
                    <span>R$</span> {activity.amount}
                  </p>
                  <button
                    onClick={() => removeList(activity.id)}
                    className="trash-btm"
                  >
                    <img src={trash} alt="" />
                  </button>
                </div>
              </div>
              <span>{activity.entry}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div>
        <h2>Você ainda não possui nenhum lançamento</h2>;
      </div>
    );
  };

  if (loginIsTrue === true) {
    return (
      <div className="app-2">
        <header>
          <ProfileHeader setLoginIsTrue={setLoginIsTrue} />
        </header>
        <main className="container">
          <section>
            <FormMain setActivities={setActivities} />
            <Balance calc={activities} />
          </section>
          <section>
            <HeaderMain setListFilter={setListFilter} />
            <Render />
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Login setLoginIsTrue={setLoginIsTrue} />
      </div>
    );
  }
};

const App = () => {
  const [activities, setActivities] = useState([]);
  const [loginIsTrue, setLoginIsTrue] = useState(true);

  return (
    <>
      <Page />;
    </>
  );
};

export default App;
