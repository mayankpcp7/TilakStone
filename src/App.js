import "./App.css";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <GetInspired />
      <HeroVideo />
    </div>
  );
}

export default App;
