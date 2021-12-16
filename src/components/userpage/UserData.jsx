import UserInfo from "./UserInfo";

function UserData(p) {
  return (
    //<div className={classes.list}>
    <div>
      {p.user.map((user) => (
        <UserInfo
          key={user.id}
          id={user.id}
          imageUrl={user.imageUrl}
          lastName={user.lastName}
          name={user.name}
          prefix={user.prefix}
          title={user.title}
          jobDescript={user.jobDescript}
          jobArea={user.jobArea}
          jobType={user.jobType}
          email={user.email}
          ip={user.ip}
          company={user.company}
          address={user.address}
        />
      ))}
    </div>
  );
}
export default UserData;
