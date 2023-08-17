import { BsHandThumbsUp } from "react-icons/bs";
import getCroppedImageUrl from "../../hooks/image-url";
import { Game } from "../../hooks/useGames";
import GameCardContainer from "./GameCardContainer";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <img
        className="w-full"
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <div className="p-4">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        <h2 className="mt-2 text-2xl font-bold">{game.name}</h2>
      </div>
      <div className="bg-slate-200 text-sm font-semibold text-slate-600 rounded-full p-2 absolute top-0 m-2">
        <span className="inline-block mr-1">
          {" "}
          {game.rating >= 4 ? (
            <BsHandThumbsUp className="text-orange-500" />
          ) : (
            ""
          )}
        </span>
        {game.rating}
      </div>
    </GameCardContainer>
  );
};

export default GameCard;
