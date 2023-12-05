function ButtonOne(props) {
	return (
		<button className="hidden tablet:flex items-center focus:bg-fairyTaleBlue border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase">
			<p className="ml-buttonOneLeft mr-[1.75rem] opacity-20">{props.number}</p>
			<p className="mr-buttonTwoRight whitespace-nowrap">{props.text}</p>
		</button>
	);
}
export default ButtonOne;
