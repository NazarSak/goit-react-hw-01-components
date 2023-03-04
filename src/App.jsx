import Profile from "components/User/user";
import user from "./components/User/user.json"



export default function App ()  {
  return (
    <div>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
};

