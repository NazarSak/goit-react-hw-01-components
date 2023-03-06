// import clsx from "clsx";

export const FriendsRender = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <span >{isOnline}</span>
      <img src={avatar} alt="User avatar" width="60" />
      <p >{name}</p>
    </div>
  );
};
 