import "./App.css";
import TsaTopChoice from "./components/TsaTopChoice";
import Footer from "./components/Footer";
import GetTouch from "./components/GetTouch";
import PursuitSec from "./components/PursuitSec";
import Commuinity from "./components/Commuinity";
import Featured from "./components/Featured";
import TSAPromise from "./components/TSAPromise";
import Faq from "./components/Faq";
import GetInspired from "./components/GetInspired";
import HeroVideo from "./components/HeroVideo";
import ThisYou from "./components/ThisYou";
import TempleJourney from "./components/TempleJourney";
import Choose from "./components/Choose";
import LatestBlogs from "./components/LatestBlogs";
import ContactInformation from "./components/ContactInformation";
import HelpingDevotees from "./components/HelpingDevotees";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="overflow-hidden max-w-[1920px] mx-auto">
      <NavBar />
      <HelpingDevotees />
      <HeroVideo />
      <ThisYou />
      <PursuitSec />
      <TempleJourney />
      <Commuinity />
      <TsaTopChoice />
      <Choose />
      <TSAPromise />
      <Featured />
      <GetInspired />
      <ContactInformation />
      <LatestBlogs />
      <Faq />
      <GetTouch />
      <Footer />
    </div>
  );
}

export default App;
