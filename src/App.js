import "./App.css";
import Header from "./components/Header";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";
import ThisYou from "./components/ThisYou";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <HeroVideo />
      <GetInspired />
      <ThisYou/>
    </div>
  );
}

export default App;
