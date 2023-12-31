function MobileOverview(props) {
	return (
		<div className="tablet:hidden">
			<div className="flex justify-evenly items-center text-[#fff] uppercase font-leagueSpartan text-center text-[0.5625rem] font-bold tracking-[0.1206rem]">
				<p
					onClick={() => {
						props.buttonCheck("overview");
					}}
					className="hover:border-b-2 border-fairyTaleBlue py-[1.25rem] opacity-50 hover:opacity-100"
				>
					Overview
				</p>
				<p
					onClick={() => {
						props.buttonCheck("structure");
					}}
					className="hover:border-b-2 border-fairyTaleBlue py-[1.25rem] opacity-50 hover:opacity-100"
				>
					Structure
				</p>
				<p
					onClick={() => {
						props.buttonCheck("surface");
					}}
					className="hover:border-b-2 border-fairyTaleBlue py-[1.25rem] opacity-50 hover:opacity-100"
				>
					Surface
				</p>
			</div>
			<div className="h-[1px] w-full bg-[#fff] opacity-20"> </div>
		</div>
	);
}

export default MobileOverview;
