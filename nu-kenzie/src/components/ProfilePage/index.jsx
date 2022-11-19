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
      <header className="nav-header">
        <ProfileHeader setLoginIsTrue={setLoginIsTrue} />
      </header>
      <main className="container-profile ">
        <section className="form-section">
          <FormMain setActivities={setActivities} />
          {activities.length > 0 ? <Balance calc={activities} /> : ""}
        </section>
        <section className="list-section">
          <HeaderMain setListFilter={setListFilter} />
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
      </main>
    </div>
  );
};
