import "../App.css";
import { Link } from "react-router-dom";
import { iconHamburger } from "../assets/addImages";
function Nav() {
  return (
    <div className="flex justify-between tablet:flex-col text-center bg-mysteriousDepth px-6 py-4 tablet:pt-[2rem]">
      <p className="uppercase text-[#fff] font-antonio text-[1.75rem] tracking-[-0.0656rem] tablet:pb-[2.4375rem]">
        The Plantes
      </p>
      <img
        src={iconHamburger}
        className="bg-white tablet:hidden"
        alt="geologyEarth"
      />
      <ul className="hidden tablet:block uppercase flex justify-evenly opacity-80 text-[#fff] font-leagueSpartan text-[0.6875rem] font-bold leading-[1.5625rem] tracking-[0.0625rem] py">
        <Link to="/mercury">
          <li>Mercury</li>
        </Link>
        <Link to="/venus">
          <li>Venus</li>
        </Link>
        <Link to="/earth">
          <li>Earth</li>
        </Link>
        <Link to="/mars">
          <li>Mars</li>
        </Link>
        <Link to="/jupiter">
          <li>Jupiter</li>
        </Link>
        <Link to="/saturn">
          <li>Saturn</li>
        </Link>
        <Link to="/uranus">
          <li>Uranus</li>
        </Link>
        <Link to="/neptune">
          <li>Neptune</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
