import type { VoteType } from '../../types/votes';
import Button from '../UI/button/Button';
import css from './VoteOptions.module.css';

interface PropsVoteOption {
  onVote: (value: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: PropsVoteOption) => {
  return (
    <div className={css.container}>
      <Button onClick={() => onVote('good')}>Good</Button>
      <Button onClick={() => onVote('neutral')}>Neutral</Button>
      <Button onClick={() => onVote('bad')}>Bad</Button>
      {canReset && (
        <Button variant={'reset'} onClick={() => onReset()}>
          Reset
        </Button>
      )}
    </div>
  );
};

export default VoteOptions;
