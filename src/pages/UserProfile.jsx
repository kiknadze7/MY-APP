// import Child from "../App";
import classes from "./UserProfile.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainPages from "./MainPages";
import UserInfo from "../components/userpage/UserInfo";

function UserProfile() {
  let { id } = useParams();

  // eslint-disable-next-line no-unused-vars
  const [addable, setAddable] = useState(1);
  const [userInfo, setUserList] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userFriend, setUserLog] = useState([]);

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((data) => setUserList(data));
  }, [addable, id]);

  useEffect(() => {
    if (userInfo) setUserLog([...userFriend, userInfo]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <div className={classes.userProf}>
      <div> {userInfo && <UserInfo user={userInfo} />}</div>
      <div>
        {userFriend.map((friend) => (
          <a key={friend.id} href={"/userprofile/" + friend.id}>
            {friend.prefix + " " + friend.name + " " + friend.lastName + " > "}
          </a>
        ))}
      </div>
      <h2 className={classes.Fr}>Friends:</h2>
      <div>
        <MainPages type={2} id={id} />
      </div>
    </div>
  );
}

export default UserProfile;
