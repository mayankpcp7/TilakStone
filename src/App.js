import "./App.css";
import ContactInformation from "./components/ContactInformation";
import GetInspired from "./components/GetInspired";

function App() {
  return (
    <div className="overflow-hidden">
      <ContactInformation/>
      <p className="text-5xl text-black text-center font-plusJkarta font-semibold">hello</p>
      <GetInspired />
    </div>
  );
}

export default App;
