import { Cards } from "./Cards";
import "./cards.css";

export const List = ({ removeList, filterList }) => {
  return (
    <ul>
      {filterList.map((activity, index) => (
        <Cards key={index} activity={activity} removeList={removeList} />
      ))}
    </ul>
  );
};
