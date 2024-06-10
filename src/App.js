import "./App.css";
import TsaTopChoice from "./components/TsaTopChoice";
import Header from "./components/Header";
import PursuitSec from "./components/PursuitSec";
import Commuinity from "./components/Commuinity";
import Featured from "./components/Featured";
import TSAPromise from "./components/TSAPromise";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";
import ThisYou from "./components/ThisYou";
import TempleJourney from "./components/TempleJourney";
import Choose from "./components/Choose";
import LatestBlogs from "./components/LatestBlogs";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <HeroVideo />
      <ThisYou />
      <PursuitSec />
      <Commuinity />
      <TsaTopChoice />
      <Choose />
      <TempleJourney />
      <TSAPromise />
      <GetInspired />
      <Featured />
      <LatestBlogs />
    </div>
  );
}

export default App;