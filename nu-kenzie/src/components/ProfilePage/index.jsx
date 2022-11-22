import { ProfileHeader } from "../Header";
import { FormMain } from "../FormProfile";
import { Balance } from "../FormProfile/Balance";
import { List } from "../List";
import { HeaderMain } from "../Filter";

export const Profile = ({
  setLoginIsTrue,
  setListFilter,
  setActivities,
  activities,
  filterList,
  removeList,
}) => {
  return (
    <div className="app-2">
      <ProfileHeader setLoginIsTrue={setLoginIsTrue} />

      <FormMain
        setActivities={setActivities}
        setListFilter={setListFilter}
        activities={activities}
        filterList={filterList}
        removeList={removeList}
      />
    </div>
  );
};
