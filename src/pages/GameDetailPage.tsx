import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Loading from "../components/Loading";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Loading />;
  if (error || !game) throw error;

  return (
    <div className="dark:text-white p-5">
      <h1 className="text-2xl font-semibold mb-3">{game.name}</h1>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </div>
  );
};

export default GameDetailPage;
