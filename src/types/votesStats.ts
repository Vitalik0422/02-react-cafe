export default interface PropsVoteStats {
  votes: {
    [key: string]: number;
  };
  totalVotes: number;
  positiveVotes: number;
}
