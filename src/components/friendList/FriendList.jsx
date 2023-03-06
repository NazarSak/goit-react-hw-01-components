import { FriendsRender } from './FriendsRender';

export const  FriendList = ({ friends }) => {
 return <ul>
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendsRender
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>;
}

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
