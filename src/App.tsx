import Footer from "./components/Footer";
import GameGrid from "./components/Main/GameGrid";
import GameHeading from "./components/Main/GameHeading";
import PlatformSelector from "./components/Main/PlatformSelector";
import SortSelector from "./components/Main/SortSelector";
import NavBar from "./components/Nav/NavBar";
import SideBar from "./components/Side/SideBar";

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // const store = useGameQueryStore();

  return (
    <div className="flex flex-col h-screen dark:bg-dark-mode bg-slate-50">
      <NavBar />
      <div className="flex flex-row dark:bg-dark-mode">
        <SideBar />
        <main className="flex-1 p-3 dark:bg-dark-mode pb-6">
          <GameHeading />
          <div className="flex flex-row gap-5 mb-8">
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
