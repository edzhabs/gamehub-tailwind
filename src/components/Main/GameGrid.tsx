import React from "react";
import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";

const SKELETON_COUNT = 16;
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  if (error)
    return (
      <h1 className="text-3xl text-center text-red-600 font-bold">
        {error.message}
      </h1>
    );
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {isLoading &&
          Array.from({ length: SKELETON_COUNT }, (_, index) => (
            <SkeletonGameCard key={index} />
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>

      {hasNextPage && (
        <button
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          className={`mt-10 px-3 py-2 text-md rounded-lg outline outline-1 outline-slate-500 hover:bg-slate-100 dark:outline-none  dark:hover:bg-slate-600  dark:text-white ${
            isFetchingNextPage
              ? "bg-slate-100 dark:bg-slate-600"
              : "dark:bg-slate-700"
          }`}
        >
          {isFetchingNextPage ? "Loading.." : "Load More"}
        </button>
      )}
    </>
  );
};

export default GameGrid;
