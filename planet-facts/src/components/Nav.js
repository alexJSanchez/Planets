import "../App.css";
import { geologyEarth } from "../assets/addImages";
function Nav() {
  return (
    <div className="">
      <p className="uppercase">The Plantes </p>
      <img src={geologyEarth} alt="geologyEarth" />
    </div>
  );
}

export default Nav;
