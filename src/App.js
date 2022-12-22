import "./App.css";
import ClientSection from "./Components/Client Section/ClientSection";
import EZSideBar from "./Components/EZSidebar/EZSideBar";
import ProfileSection from "./Components/Right Section/ProfileSection";

function App() {
  return (
    <div className="App">
      <EZSideBar />
      <ClientSection />
      <ProfileSection />
    </div>
  );
}

export default App;
