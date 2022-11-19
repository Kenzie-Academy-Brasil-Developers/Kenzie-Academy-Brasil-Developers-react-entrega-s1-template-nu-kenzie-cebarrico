import { useState } from "react";
import "./form.css";

import uuid from "react-uuid";

export const FormMain = ({ setActivities }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [entry, setEntry] = useState("");

  function register(event) {
    event.preventDefault();

    let activity = {
      id: uuid(),
      name,
      amount,
      entry,
    };

    setActivities((lastActivities) => {
      return [...lastActivities, activity];
    });

    setName("");
    setAmount("");
    setEntry("");
    setId("");
  }
  return (
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
            onChange={(event) => setAmount(event.target.value)}
            placeholder="1"
            required
          />
        </div>
        <span>R$</span>
        <div className="value-type">
          <label htmlFor="">Tipo de valor</label>
          <select
            name="value-type"
            onClick={(event) => setEntry(event.target.value)}
            id=""
            required
          >
            <option value="">--Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesas">Despesas</option>
          </select>
        </div>
      </div>
      <button type="submit" className="insert-btm">
        Inserir Valor
      </button>
    </form>
  );
};
