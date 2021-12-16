import ItemList from "./Item";
import classes from "./Items.module.css";

function Items(p) {
  return (
    <div className={classes.list}>
      {p.users.map((user) => (
        <ItemList
          key={user.id}
          id={user.id}
          imageUrl={user.imageUrl}
          lastName={user.lastName}
          name={user.name}
          prefix={user.prefix}
          title={user.title}
        />
      ))}
    </div>
  );
}

export default Items;
