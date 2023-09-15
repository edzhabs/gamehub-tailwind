import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";

const SKELETON_COUNT = 16;

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (error)
    return (
      <h1 className="text-3xl text-center text-red-600 font-bold">
        {error.message}
      </h1>
    );
  return (
    <InfiniteScroll
      style={{ overflowY: "hidden", overflowX: "hidden" }}
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={
        <div className="flex justify-center w-full">
          <LiaSpinnerSolid
            className="mt-10 animate-spin dark:text-slate-200"
            size={50}
          />
        </div>
      }
    >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
