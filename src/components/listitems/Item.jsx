import { Link } from "react-router-dom";
import classes from "./ItemList.module.css";
function Item(p) {
  return (
    <div className={classes.listItem}>
      <div className={classes.listItemContent}>
        <Link to={"/userprofile/" + p.id}>
          <img
            className={classes.listImg}
            src={p.imageUrl + "?v=" + p.id}
            alt=""
          />
        </Link>
        <div className={classes.listItemDescription}>
          <p>
            <b>
              {p.prefix} {p.name} {p.lastName}
            </b>
          </p>
        </div>
        <div className={classes.listItemDescription}>{p.title}</div>
      </div>
    </div>
  );
}

export default Item;
