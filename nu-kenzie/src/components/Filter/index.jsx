import "./filter.css";

export const HeaderMain = ({ setListFilter, filterList }) => {
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
