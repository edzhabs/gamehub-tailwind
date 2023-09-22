import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import Loading from "../components/Loading";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  if (isLoading) return <Loading />;
  if (error || !game) throw error;
  return (
    <div className="dark:text-white p-5">
      <h1 className="text-2xl font-semibold">{game.name}</h1>
      <p className="text-md">{game.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
