import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { iconHamburger, iconChevron } from "../assets/addImages";
function Nav() {
  const [dropDown, SetDropDown] = useState(false);

  return (
    <div>
      <div className="relative flex justify-between tablet:flex-col desktop:flex-row text-center items-center tablet:items-stretch desktop:items-center bg-mysteriousDepth px-6 tablet:px-[3.1875rem] py-4 tablet:pb-[1.6875rem] tablet:pt-[2rem] desktop:py-[2rem]">
        <p className="uppercase text-[#fff] font-antonio text-[1.75rem] tracking-[-0.0656rem] tablet:pb-[2.4375rem] desktop:pb-0">
          The Planets
        </p>
        <img
          src={iconHamburger}
          className="bg-white tablet:hidden"
          onClick={() => SetDropDown(!dropDown)}
          alt="geologyEarth"
        />
        <ul className="hidden uppercase tablet:flex tablet:justify-between gap-[2.0625rem] opacity-80 text-[#fff] font-leagueSpartan text-[0.6875rem] font-bold leading-[1.5625rem] tracking-[0.0625rem] ">
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
      {dropDown ? (
        <div className="absolute flex justify-between items-center bg-mysteriousDepth left-0 top-[calc(100% + 0.25rem)] w-full pt-[2.875rem] pb-[1.25rem] px-6">
          <div className="flex">
            <span className="bg-[#fff] w-[20px] h-[20px] rounded-[20px]"></span>
            <p className="uppercase ml-[1.5625rem] text-[#fff]">Mercury</p>
          </div>
          <div>
            <img src={iconChevron} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Nav;
