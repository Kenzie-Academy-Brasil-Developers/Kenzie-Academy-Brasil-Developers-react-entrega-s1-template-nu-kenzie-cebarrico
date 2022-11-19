import { ListRender } from "./Cards";
import "./cards.css";

export const List = ({ removeList, filterList }) => {
  return (
    <ul>
      {filterList.map((activity, index) => (
        <ListRender key={index} activity={activity} removeList={removeList} />
      ))}
    </ul>
  );
};
