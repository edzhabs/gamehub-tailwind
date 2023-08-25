import React from "react";
import { GameQuery } from "../../App";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonGameCard from "./SkeletonGameCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { LiaSpinnerSolid } from "react-icons/lia";

const SKELETON_COUNT = 16;
interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

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
      dataLength={fetchedGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
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
