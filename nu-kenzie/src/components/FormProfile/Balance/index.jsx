import { useState } from "react";

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
      <div>
        <h2>Seu saldo é:</h2>
        <span>O valor se refere ao saldo</span>
      </div>
      <p>
        <span>R$</span> {realSum}
      </p>
    </div>
  );
};
