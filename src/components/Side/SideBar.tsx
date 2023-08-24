import getCroppedImageUrl from "../../hooks/image-url";
import useGenres, { Genre } from "../../hooks/useGenres";
import { LiaSpinnerSolid } from "react-icons/lia";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const SideBar = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  // if (error)
  //   return (
  //     <h1 className="text-md text-center text-red-600 font-bold">
  //       {error.message}
  //     </h1>
  //   );

  return (
    <aside className="hidden lg:block w-52 py-1 px-4 h-full dark:text-white">
      <h1 className="text-2xl font-bold">Genres</h1>
      {isLoading && (
        <LiaSpinnerSolid className="text-center m-10 animate-spin" size={50} />
      )}
      <ul className="mt-5">
        {data?.results.map((genre) => (
          <li className="flex flex-row gap-2 my-3 items-center" key={genre.id}>
            <img
              className="w-9 h-9 rounded-lg object-cover"
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <button
              onClick={() => onSelectGenre(genre)}
              className="text-left text-lg xl:text-xl hover:underline hover:text-slate-500 hover:underline-offset-4 transition-transform hover:scale-105"
            >
              <span
                className={` ${
                  selectedGenre?.name === genre.name
                    ? "font-bold text-xl underline underline-offset-4"
                    : "font-normal"
                }`}
              >
                {genre.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
