import Footer from "../components/Footer";
import GameGrid from "../components/Main/GameGrid";
import GameHeading from "../components/Main/GameHeading";
import PlatformSelector from "../components/Main/PlatformSelector";
import SortSelector from "../components/Main/SortSelector";
import SideBar from "../components/Side/SideBar";

const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage;
