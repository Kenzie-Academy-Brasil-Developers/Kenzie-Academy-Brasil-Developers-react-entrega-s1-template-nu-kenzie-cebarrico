import "./filter.css";
import { List } from "../List";

export const HeaderMain = ({
  setListFilter,
  filterList,
  removeList,
  activities,
}) => {
  return (
    <section className="list-section">
      <div className="list-header">
        <h2>Resumo Fincanceiro</h2>
        <div className="btm-container">
          <button onClick={() => setListFilter("Todos")}>Todos</button>
          <button onClick={() => setListFilter("Entrada")}>Entradas</button>
          <button onClick={() => setListFilter("Despesas")}>Despesas</button>
        </div>
      </div>
      {activities.length > 0 ? (
        <List
          activities={activities}
          removeList={removeList}
          filterList={filterList}
        />
      ) : (
        <h2>Você ainda não possui nenhum lançamento</h2>
      )}
    </section>
  );
};
