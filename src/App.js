import "./App.css";
import Header from "./components/Header";
import PursuitSec from "./components/PursuitSec";
import Commuinity from "./components/Commuinity";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";
import ThisYou from "./components/ThisYou";
import TempleJourney from "./components/TempleJourney";
function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <HeroVideo />
      <ThisYou />
      <PursuitSec />
      <TempleJourney />
      <Commuinity />
      <GetInspired />
    </div>
  );
}

export default App;
