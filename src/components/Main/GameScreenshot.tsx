import useScreenshots from "../../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {data?.results.map((game) => (
        <img key={game.id} src={game.image} />
      ))}
    </div>
  );
};

export default GameScreenshot;
