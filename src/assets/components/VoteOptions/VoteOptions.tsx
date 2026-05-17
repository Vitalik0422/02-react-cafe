import css from './VoteOptions.module.css';
import Button from '../UI/button/Button';
interface PropsVoteOption {
  vote: (value: string) => void;
  onReset: () => void;
  totalVotes: number;
}

const VoteOptions = ({ vote, onReset, totalVotes }: PropsVoteOption) => {
  return (
    <div className={css.container}>
      <Button onClick={() => vote('good')}>Good</Button>
      <Button onClick={() => vote('neutral')}>Neutral</Button>
      <Button onClick={() => vote('bad')}>Bad</Button>
      {totalVotes !== 0 && (
        <Button variant={'reset'} onClick={() => onReset()}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default VoteOptions;
