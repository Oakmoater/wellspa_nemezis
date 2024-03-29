import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistor from "./Transactions/Transaction"
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Pouzity materialy" stats={data} />
      <FriendList title="Pracovnicky" friends={friends} />
      <TransactionHistor title="TransactionHistor" items={transactions} />;
    </div>
  );
};