import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface PropsVoteStats {
  votes: Votes;
  totalVotes: number;
  positiveVotes: number;
}

const VoteStats = ({
  votes: { good, neutral, bad },
  totalVotes,
  positiveVotes,
}: PropsVoteStats) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={styles.stat}>
        Positive:
        <strong>{positiveVotes}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
