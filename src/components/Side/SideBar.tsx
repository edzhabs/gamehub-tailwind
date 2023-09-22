import getCroppedImageUrl from "../../hooks/image-url";
import useGenres from "../../hooks/useGenres";
import useGameQueryStore from "../../store";
import Loading from "../Loading";

const SideBar = () => {
  const { data, isLoading } = useGenres();

  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  return (
    <aside className="hidden lg:block w-52 py-1 px-4 h-full dark:text-white">
      <h1 className="text-2xl font-bold">Genres</h1>
      {isLoading && <Loading />}
      <ul className="mt-5">
        {data?.results.map((genre) => (
          <li className="flex flex-row gap-2 my-3 items-center" key={genre.id}>
            <img
              className="w-9 h-9 rounded-lg object-cover"
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <button
              onClick={() => setGenreId(genre.id)}
              className="text-left text-lg xl:text-xl hover:underline hover:text-slate-500 hover:underline-offset-4 transition-transform hover:scale-105"
            >
              <span
                className={` ${
                  selectedGenreId === genre.id
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
