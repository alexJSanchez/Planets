function ButtonOne(props) {
  return (
    <button className="hidden tablet:flex items-center border pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-bold font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase">
      <p className="opacity-50 ml-buttonOneLeft mr-[1.75rem] ">
        {props.number}
      </p>
      <p className="opacity-100 mr-buttonTwoRight whitespace-nowrap">
        {props.text}
      </p>
    </button>
  );
}
export default ButtonOne;
