import classes from "./UserInfo.module.css";

// import { Link } from "react-router-dom";

function UserInfo({ user }) {
  return (
    <div className={classes.header}>
      <img
        className={classes.img}
        src={user.imageUrl + "?v=" + user.id}
        alt=""
      />
      <fieldset className={classes.fieA}>
        <legend>info</legend>
        <div>
          <strong>
            {user.prefix} {user.name} {user.lastName}
          </strong>
          <br />
        </div>
        <div>Email: {user.email}</div>
        <div>Ip Address: {user.ip}</div>
        <div>Ip Address: {user.ip}</div>
        <div>Job Area: {user.jobArea}</div>
        <div>Job Type: {user.jobType}</div>
      </fieldset>

      <fieldset className={classes.fieB}>
        <legend>Address</legend>
        <div>
          <strong>
            {user.company.name},{user.company.suffix}
          </strong>
          <br />
          <div>City: {user.address.city}</div>
          <div>Country: {user.address.country}</div>
          <div>State: {user.address.state}</div>
          <div>Street Address: {user.address.streetAddress}</div>
          <div>ZIP: {user.address.zipCode}</div>
        </div>
        <div></div>
      </fieldset>
    </div>
  );
}

export default UserInfo;
