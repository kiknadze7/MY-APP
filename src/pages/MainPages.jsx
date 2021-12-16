import { useEffect, useState } from "react";
import Items from "../components/listitems/Items";

function MainPages(props) {
  // const [loadedUsers, setLoadedUsers] = useState("");
  const [addable, setAddable] = useState(1);
  const [userList, setUserList] = useState([]);
  const [update, setupdate] = useState(1);

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (addable < 10) {
        setAddable(addable + 1);
      }
    }
  };
  let link = "";
  if (props.type === 1) {
    link = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${addable}/20`;
  } else {
    link = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${props.id}/friends/${addable}/20`;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setUserList([]);
    setAddable(1);
    setupdate(update + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        // console.info("fetch1", addable, data);
        setUserList([...userList, ...data.list]);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addable, update]);

  return userList && <Items users={userList} />;
}

export default MainPages;
