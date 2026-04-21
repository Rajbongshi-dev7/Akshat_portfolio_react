import "./App.css";
import HeroArea from "./components/Heroarea/HeroArea";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import Navbar from "./components/Navbar/Navbar";
import StatusRibbon from "./components/StatusRibbon/StatusRibbon";
function App() {
  return (
    <>
      <Navbar />
      <HeroArea />
      <StatusRibbon />
      <MobileMenu />
    </>
  );
}

export default App;
