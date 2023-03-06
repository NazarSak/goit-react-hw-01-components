import { Name, Img } from './FriendList.styled';

export const FriendsRender = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span>{isOnline}</span>
      <Img src={avatar} alt="User avatar" width="60" />
      <Name>{name}</Name>
    </>
  );
};
