import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { iconHamburger, iconChevron } from "../assets/addImages";
function Nav() {
  const [dropDown, SetDropDown] = useState(false);

  return (
    <div>
      <div>
        <div className="relative flex justify-between tablet:flex-col desktop:flex-row text-center items-center tablet:items-stretch desktop:items-center px-6 tablet:px-[3.1875rem] py-4 tablet:pb-[1.6875rem] tablet:pt-[2rem] desktop:py-[2rem]">
          <Link to="/">
            <p className="uppercase text-[#fff] font-antonio text-[1.75rem] tracking-[-0.0656rem] tablet:pb-[2.4375rem] desktop:pb-0">
              The Planets
            </p>
          </Link>
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
          <div className="absolute uppercase flex tablet:hidden flex-col w-full justify-between text-[15px] px-6 font-bold left-0 top-[calc(100% + 0.25rem)] pt-[2.875rem] px-4 pb-[1.25rem]  ">
            <Link to="/mercury">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-[#DEF4FC] w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">
                    Mercury
                  </p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="venus">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-venus w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">Venus</p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="earth">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-earth w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">Earth</p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="mars">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-mars w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">Mars</p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="jupiter">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-jupiter w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">
                    Jupiter
                  </p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="saturn">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-saturn w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">Saturn</p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="uranus">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-uranus w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">Uranus</p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
              <div className="h-[1px] w-full bg-[#fff] opacity-20 my-[1.25rem]">
                {" "}
              </div>
            </Link>
            <Link to="neptune">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-neptune w-[20px] h-[20px] rounded-full">
                    {" "}
                  </div>
                  <p className="uppercase ml-[1.5625rem] text-[#fff]">
                    Neptune
                  </p>
                </div>
                <div className="">
                  <img src={iconChevron} />
                </div>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="h-[1px] w-full bg-[#fff] opacity-20"> </div>
    </div>
  );
}

export default Nav;
