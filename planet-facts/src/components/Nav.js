import "../App.css";
import { iconHamburger } from "../assets/addImages";
function Nav() {
  return (
    <div className="flex justify-between items-center bg-mysteriousDepth px-6 py-4">
      <p className="uppercase text-[#fff] font-antonio text-[1.75rem] tracking-[-0.0656rem]">
        The Plantes
      </p>
      <img src={iconHamburger} className="bg-white" alt="geologyEarth" />
    </div>
  );
}

export default Nav;
