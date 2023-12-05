function PlanetDisplay(props) {
  return (
    <div>
      <div className="flex justify-center items-center py-[5.9375rem] px-[8.25rem]">
        <img src={props.planetImg} />
      </div>
    </div>
  );
}
export default PlanetDisplay;
