import propTypes from 'prop-types';
import { FriendsRender } from './FriendsRender';
import { List, Friend } from './FriendList.styled';

export const FriendList = ({ friends, isOnline }) => {
  return (
    <List>
      {friends.map(friend => (
        <Friend key={friend.id} isOnline={isOnline}>
          <FriendsRender
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Friend>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
};

// export const FriendList = ({friends}) => {
// return <ul >
// {friends.map(friend => (
//     <li key = {friend.id}>
//     <span>{friend.isOnline}</span>
//     <img  src={friend.avatar} alt="User avatar" width="48" />
//     <p>{friend.name}</p>
//   </li>
// ))}
// </ul>
// }
