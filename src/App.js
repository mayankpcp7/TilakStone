import "./App.css";
import TsaTopChoice from "./components/TsaTopChoice";
import Header from "./components/Header";
import PursuitSec from "./components/PursuitSec";
import Commuinity from "./components/Commuinity";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";
import ThisYou from "./components/ThisYou";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <HeroVideo />
      <ThisYou />
      <GetInspired />
      <PursuitSec />
      <Commuinity />
      <TsaTopChoice />
      <TempleJourney />
    </div>
  );
}

export default App;
