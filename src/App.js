import "./App.css";
import HeroVideo from "./components/HeroVideo";
import Header from "./components/Header";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <Header />
      <HeroVideo />
    </div>
  );
}

export default App;
