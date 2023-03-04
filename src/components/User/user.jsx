import PropTypes from "prop-types"

const Profile = ({location,avatar,username,tag,statsfolowers,statsfolowers,statslikes}) => {
  return (
<div >
<div >
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
  <span >Followers</span>
  <span >{statsfolowers}</span>
</li>
<li>
  <span >Views</span>
  <span >{statsfolowers}</span>
</li>
<li>
  <span >Likes</span>
  <span >{statslikes}</span>
</li>
</ul>
</div>
)
}

Profile.PropTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location : PropTypes.string,
  avatar : PropTypes.string,
  statsfolowers: PropTypes.number,
  statsviews: PropTypes.number,
  statslikes: PropTypes.number
}

export default Profile