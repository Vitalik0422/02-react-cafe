export default interface PropsVoteOption {
  vote: (value: string) => void;
  onReset: () => void;
  totalVotes: number;
}
