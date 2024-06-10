import "./App.css";
import Featured from "./components/Featured";
import TSAPromise from "./components/TSAPromise";

function App() {
  return (
    <div className="overflow-hidden">
      <TSAPromise />
      <Featured />
      <p className="text-5xl text-black text-center font-plusJkarta font-semibold">
        hello
      </p>
    </div>
  );
}

export default App;
