import Profile from 'components/profile/Profile';
import user from "./components/profile/user.json"
// first

import {Statistics} from 'components/statistics/Statistics';
import data from "./components/statistics/data.json"

export default function App ()  {
  return (
<>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}

/>

<Statistics title="Upload stats" stats={data} />
</>



  );
};

console.log(data);
 