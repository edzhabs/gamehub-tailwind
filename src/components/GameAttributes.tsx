import Game from "../entities/Game";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <dl className="grid grid-cols-2 gap-10 mt-8">
      <DefinitionItem term="Platforms">
        <ul>
          {game.parent_platforms.map(({ platform }) => (
            <li key={platform.id}>{platform.name}</li>
          ))}
        </ul>
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <span className="rounded-md bg-green-950 px-2 py-1 font-semibold text-green-300">
          {game.rating}
        </span>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        <ul>
          {game.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        <ul>
          {game.publishers.map((publisher) => (
            <li key={publisher.id}>{publisher.name}</li>
          ))}
        </ul>
      </DefinitionItem>
    </dl>
  );
};

export default GameAttributes;
