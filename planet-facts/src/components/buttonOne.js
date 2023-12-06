function ButtonOne(props) {
	return (
		<button
			id={props.text}
			onClick={() => {
				props.buttonCheck(props.text);
			}}
			className={`${props.btnStyle}`}
		>
			<p className="ml-buttonOneLeft mr-[1.0625rem] opacity-20">
				{props.number}
			</p>
			<p className="mr-buttonTwoRight whitespace-nowrap">{props.text}</p>
		</button>
	);
}
export default ButtonOne;
