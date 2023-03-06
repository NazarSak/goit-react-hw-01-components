import Profile from 'components/profile/Profile';
import user from './components/profile/user.json';
// first

import { Statistics } from 'components/statistics/Statistics';
import data from './components/statistics/data.json';
//  second

import {FriendList} from 'components/friendList/FriendList';
import friends from './components/friendList/friends.json';
// third

import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import transactions from "./components/transactionHistory/transactions.json"
// last

export default function App() {
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
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}
