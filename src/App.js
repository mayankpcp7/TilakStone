import "./App.css";
import Header from "./components/Header";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";
function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <HeroVideo />
      <GetInspired />
    </div>
  );
}

export default App;
