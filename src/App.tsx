import Footer from "./components/Footer";
import GameGrid from "./components/Main/GameGrid";
import NavBar from "./components/Nav/NavBar";
import SideBar from "./components/Side/SideBar";

function App() {
  return (
    <div className="flex flex-col h-screen dark:bg-dark-mode bg-slate-50">
      <NavBar />
      <div className="flex flex-row">
        <SideBar />
        <main className="flex-1 p-3 dark:bg-dark-mode pb-6">
          <GameGrid />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
