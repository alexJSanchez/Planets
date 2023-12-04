import "../App.css";
import { iconHamburger } from "../assets/addImages";
function Nav() {
  return (
    <div className="px-6 py-4">
      <p className="uppercase">The Plantes </p>
      <img src={iconHamburger} className="bg-white" alt="geologyEarth" />
    </div>
  );
}

export default Nav;
