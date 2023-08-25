import { GameQuery } from "../../App";
import useGenre from "../../hooks/useGenre";
import useGenres from "../../hooks/useGenres";
import usePlatform from "../../hooks/usePlatform";
import usePlatforms from "../../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  return (
    <h1 className="text-5xl font-bold my-6 dark:text-white">
      {platform?.name} {genre?.name} Games
    </h1>
  );
};

export default GameHeading;
