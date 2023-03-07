import PropTypes from 'prop-types';
import { FriendsRender } from './FriendsRender';
import { List, Friend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Friend key={friend.id} >
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
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
    })
  )
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
