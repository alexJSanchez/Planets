import ButtonOne from "./buttonOne";
function PlanetDisplay(props) {
  return (
    <div className="text-[#fff]">
      <div className="flex justify-center items-center pt-[5.9375rem] pb-[6.125rem] tablet:px-[292px] px-[8.25rem]">
        <img src={props.planetImg} />
      </div>
      <div className="flex flex-col tablet:flex-row items-center text-center px-[1.5rem] ">
        <div>
          <div>
            <h2 className="text-[2.5rem] uppercase font-antonio mb-4">
              {props.planet}
            </h2>
            <p className="text-[0.6875rem] leading-[1.375rem] font-leagueSpartan mb-8">
              {props.planetSummary}
            </p>
          </div>
          <div className="flex">
            <p className="text-[0.75rem] font-leagueSpartan leading-[1.5625rem] opacity-50">
              Source:
            </p>
            <a href={props.planetSource}>
              <p className="opacity-50 font-leagueSpartan text-[0.75rem] font-bold leading-[1.5625rem] underline">
                Wikipedia
              </p>
            </a>
          </div>
        </div>
        <div>
          <ButtonOne />
        </div>
      </div>
    </div>
  );
}
export default PlanetDisplay;
