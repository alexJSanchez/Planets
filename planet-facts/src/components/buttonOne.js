function ButtonOne(props) {
	return (
		<button
			id={props.text}
			onClick={() => {
				props.buttonCheck(props.text);
			}}
			className="hidden tablet:flex items-center hover:bg-carbonBlue checked:bg-mysteriousDepth focus:bg-fairyTaleBlue border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
		>
			<p className="ml-buttonOneLeft mr-[1.0625rem] opacity-20">
				{props.number}
			</p>
			<p className="mr-buttonTwoRight whitespace-nowrap">{props.text}</p>
		</button>
	);
}
export default ButtonOne;
