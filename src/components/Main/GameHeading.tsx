import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <h1 className="text-5xl font-bold my-6 dark:text-white">
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </h1>
  );
};

export default GameHeading;
