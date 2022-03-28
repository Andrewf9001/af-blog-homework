import SideNavBarButtons from "./sideNavComponents/SideNavButtons";
import SideNavBarImage from "./sideNavComponents/SideNavImage";
import AE86 from "../../static/ae86-icon.png";

function SideNavBar() {
  return (
    <div className="sidebar-wrapper">
      <SideNavBarImage image={AE86} />

      <SideNavBarButtons />

      <SideNavBarImage image={AE86} />
    </div>
  );
}

export default SideNavBar;
