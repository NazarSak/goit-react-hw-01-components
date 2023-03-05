// import PropTypes from "prop-types"

 function Profile ({location,avatar,username,tag,stats})  {
  return (
<div>
<div>
<img
  src={avatar}
  alt="User avatar"
/>
<p>{username}</p>
<p>{tag}</p>
<p>{location}</p>
</div>

<ul >
<li>
  <span>Followers</span>
  <span>{stats.followers}</span>
</li>
<li>
  <span>Views</span>
  <span>{stats.views}</span>
</li>
<li>
  <span >Likes</span>
  <span >{stats.likes}</span>
</li>
</ul>
</div>
  );
};
 
// Profile.PropTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location : PropTypes.string,
//   avatar : PropTypes.string,
//   stats: PropTypes.shape({
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
//     })
// }


export default Profile


