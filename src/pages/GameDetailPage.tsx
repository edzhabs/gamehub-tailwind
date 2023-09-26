import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import Loading from "../components/Loading";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/Main/GameTrailer";
import GameScreenshot from "../components/Main/GameScreenshot";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Loading />;
  if (error || !game) throw error;

  return (
    <div className="dark:text-white p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-4xl tracking-wide font-bold mb-3">{game.name}</h1>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </div>
        <div>
          <GameTrailer gameId={game.id} />
          <GameScreenshot gameId={game.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
