import { useState } from "react";
import { Login } from "./components/Login";
import { Profile } from "./components/ProfilePage";

import "./css/globalStyles.css";
import "./css/profile.css";
import "./App.css";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [loginIsTrue, setLoginIsTrue] = useState(false);
  const [listFilter, setListFilter] = useState("Todos");

  const filterList = activities.filter((activity) =>
    listFilter === "Todos" ? true : activity.entry === listFilter
  );

  function removeList(id) {
    const newList = setActivities(activities.filter((list) => list.id !== id));
  }

  return (
    <>
      {loginIsTrue ? (
        <Profile
          setLoginIsTrue={setLoginIsTrue}
          setListFilter={setListFilter}
          setActivities={setActivities}
          activities={activities}
          filterList={filterList}
          removeList={removeList}
        />
      ) : (
        <Login setLoginIsTrue={setLoginIsTrue} />
      )}
    </>
  );
};

export default App;
