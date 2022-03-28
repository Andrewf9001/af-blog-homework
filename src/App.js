import SideNavBar from "./components/sidebar/SideNavBar";
import ContentHeader from "./components/headers/Header";
import BodyContent from "./components/body/BodyContent";
import FooterContainer from "./components/footer/FooterContainer";

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <SideNavBar />
      </div>

      <div className="right-content-container">
        <ContentHeader />
        <BodyContent />
        <FooterContainer />
      </div>
    </div>
  );
}

export default App;
