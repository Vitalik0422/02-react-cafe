import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import Notification from '../Notification/Notification';
import type { Votes } from '../../types/votes';
import type { VoteType } from '../../types/votes';

const initialVotes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [votes, setVotes] = useState<Votes>(initialVotes);
  const totalVotes = Object.values(votes).reduce((acc, el) => acc + el, 0);
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  const canReset = totalVotes > 0;
  const handleVote = (key: VoteType) => {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  };

  const resetVotes = () => {
    setVotes(initialVotes);
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={canReset}
      />
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
