import { GameQuery } from "../../App";
import useGenres from "../../hooks/useGenres";
import usePlatforms from "../../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  return (
    <h1 className="text-5xl font-bold my-6 dark:text-white">
      {platform?.name} {genre?.name} Games
    </h1>
  );
};

export default GameHeading;
