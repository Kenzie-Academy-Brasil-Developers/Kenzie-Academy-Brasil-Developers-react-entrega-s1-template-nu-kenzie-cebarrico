import trash from "../../../img/trash.svg";
import "../cards.css";
export const Cards = ({ activity, removeList, index }) => {
  return (
    <li id={activity.id} key={index} className={activity.entry}>
      <div>
        <h2>{activity.name}</h2>
        <div>
          <p>
            <span>R$</span> {activity.amount}
          </p>
          <button onClick={() => removeList(activity.id)} className="trash-btm">
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
      <span>{activity.entry}</span>
    </li>
  );
};
