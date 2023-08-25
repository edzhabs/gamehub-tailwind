import { useState } from "react";
import Footer from "./components/Footer";
import GameGrid from "./components/Main/GameGrid";
import GameHeading from "./components/Main/GameHeading";
import PlatformSelector from "./components/Main/PlatformSelector";
import NavBar from "./components/Nav/NavBar";
import SideBar from "./components/Side/SideBar";
import SortSelector from "./components/Main/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <div className="flex flex-col h-screen dark:bg-dark-mode bg-slate-50">
      <NavBar
        onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
      />
      <div className="flex flex-row dark:bg-dark-mode">
        <SideBar
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
          selectedGenreId={gameQuery.genreId}
        />
        <main className="flex-1 p-3 dark:bg-dark-mode pb-6">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex flex-row gap-5 mb-8">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
