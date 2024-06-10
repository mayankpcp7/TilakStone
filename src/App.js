import "./App.css";
import Featured from "./components/Featured";
import TSAPromise from "./components/TSAPromise";
import GetInspired from "./components/GetInspired";

function App() {
  return (
    <div className="overflow-hidden">
      <TSAPromise />
      <Featured />
      <p className="text-5xl text-black text-center font-plusJkarta font-semibold">
        hello
      </p>
      <GetInspired />
    </div>
  );
}

export default App;
