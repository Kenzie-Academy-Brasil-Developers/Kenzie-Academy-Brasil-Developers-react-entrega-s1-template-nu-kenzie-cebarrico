import { useState } from "react";
import "./form.css";
import { HeaderMain } from "../Filter";
import { Balance } from "./Balance";

import uuid from "react-uuid";

export const FormMain = ({
  setActivities,
  activities,
  removeList,
  filterList,
  setListFilter,
}) => {
  const categoryList = ["Entrada", "Despesas"];
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [entry, setEntry] = useState("");
  let activity = {
    id: uuid(),
    name,
    amount,
    entry,
  };

  function register(event) {
    event.preventDefault();
    if (activity.entry === "") {
      activity.entry = categoryList[0];
    }
    setActivities((lastActivities) => {
      return [...lastActivities, activity];
    });

    setName("");
    setAmount("");
    setEntry(categoryList[0]);
    setId("");
  }

  return (
    <main className="container-profile ">
      <section className="form-section">
        <form onSubmit={register}>
          <label>Descrição</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite sua Descrição"
            required
          />
          <p>Ex: Compra de roupas</p>
          <div className="value-container">
            <div className="value">
              <label htmlFor="">Valor</label>
              <input
                type="number"
                value={amount}
                onChange={(event) => setAmount(event.target.value.split("-"))}
                placeholder="1"
                required
              />
            </div>
            <span>R$</span>
            <div className="value-type">
              <label htmlFor="">Tipo de valor</label>
              <select
                name="value-type"
                onChange={(event) => setEntry(event.target.value)}
                value={entry}
              >
                <option value="Entrada">Entrada</option>
                <option value="Despesas">Despesas</option>
              </select>
            </div>
          </div>
          <button type="submit" className="insert-btm">
            Inserir Valor
          </button>
        </form>
        {activities.length > 0 ? <Balance calc={activities} /> : ""}
      </section>
      <HeaderMain
        setListFilter={setListFilter}
        activities={activities}
        removeList={removeList}
        filterList={filterList}
      />
    </main>
  );
};
