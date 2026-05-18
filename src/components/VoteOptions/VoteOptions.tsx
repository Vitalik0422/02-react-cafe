import type { VoteType } from '../../types/votes';
import Button from '../UI/Button/Button';
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (value: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
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
