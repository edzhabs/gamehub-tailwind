import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import Loading from "../components/Loading";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Loading />;
  if (error || !game) throw error;

  return (
    <div className="dark:text-white p-5">
      <h1 className="text-4xl tracking-wide font-bold mb-3">{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </div>
  );
};

export default GameDetailPage;
