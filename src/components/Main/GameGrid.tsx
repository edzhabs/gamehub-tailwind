import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";

const SKELETON_COUNT = 16;
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);

  if (error)
    return (
      <h1 className="text-3xl text-center text-red-600 font-bold">{error}</h1>
    );
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {loading &&
        Array.from({ length: SKELETON_COUNT }, (_, index) => (
          <SkeletonGameCard key={index} />
        ))}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
