import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from './CafeInfo/CafeInfo';
import VoteOptions from './VoteOptions/VoteOptions';
import VoteStats from './VoteStats/VoteStats';
import Notification from './Notification/Notification';
import type Vote from '../types/votes';

const initialVotes: Vote = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [votes, setVotes] = useState<Vote>(initialVotes);
  const totalVotes = Object.values(votes).reduce((acc, el) => acc + el, 0);
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  const onVote = (key: string) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const onReset = () => {
    setVotes(initialVotes);
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions vote={onVote} onReset={onReset} totalVotes={totalVotes} />
      {totalVotes !== 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveVotes={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
