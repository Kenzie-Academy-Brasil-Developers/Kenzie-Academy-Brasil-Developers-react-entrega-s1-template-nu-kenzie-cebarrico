import { useState } from "react";
import uuid from "react-uuid";
import "./profile.css";
import logo from "../../img/nukenzieb.svg";
import trash from "../../img/trash.svg";

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
      <div>
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
export const Balance = ({ calc }) => {
  const [count, setCount] = useState(0);

  const sum = calc.map((list) => {
    if (list.entry === "Entrada") {
      return Number(list.amount);
    } else {
      return 0;
    }
  });
  const sub = calc.map((list) => {
    if (list.entry === "Despesas") {
      return Number(list.amount);
    } else {
      return 0;
    }
  });

  let totalSum = sum.reduce((total, currentElemnt) => total + currentElemnt, 0);
  let totalSub = sub.reduce(
    (totalSum, currentElemnt) => totalSum - currentElemnt,
    0
  );
  let realSum = totalSum + totalSub;

  return (
    <div className="balance">
      <h2>Seu saldo é:</h2>
      <p>
        <span>R$</span> {realSum}
      </p>
    </div>
  );
};

export const HeaderMain = ({ setListFilter }) => {
  return (
    <div className="list-header">
      <h2>Resumo Fincanceiro</h2>
      <div className="btm-container">
        <button onClick={() => setListFilter("Todos")}>Todos</button>
        <button onClick={() => setListFilter("Entrada")}>Entradas</button>
        <button onClick={() => setListFilter("Despesas")}>Despesas</button>
      </div>
    </div>
  );
};
