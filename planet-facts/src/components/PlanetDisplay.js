import { useState } from "react";
import ButtonOne from "./buttonOne";
function PlanetDisplay(props) {
	const [checkButton, setButtonCheck] = useState("overview");

	const handleButtonCheck = (text) => {
		setButtonCheck(text); // Update the buttonCheck state when a button is clicked
	};
	return (
		<div className="text-[#fff] desktop:grid desktop:grid-cols-2 desktop:pt-[126px]">
			<div className="flex justify-center items-center desktop:items-stretch pt-[5.9375rem] tablet:pt-[7.5rem] pb-[6.125rem] tablet:pb-[12.5rem] tablet:px-[292px] desktop:px-0 desktop:py-0 ">
				<img src={props.planetImg} className="tablet:hidden" />
				{checkButton == "overview" ? (
					<img src={props.planetImg} className="hidden tablet:block" />
				) : checkButton == "Internal Structure" ? (
					<img src={props.planetInternalImg} className="hidden tablet:block" />
				) : (
					<div className="hidden tablet:block relative">
						<img src={props.planetImg} />
						<img
							className="absolute top-[230px] desktop:top-[300px] inset-1/2 -translate-x-1/2 -translate-y-1/2"
							src={props.planetGeologyImg}
						/>
					</div>
				)}
			</div>
			<div className="flex flex-col tablet:flex-row desktop:flex-col tablet:justify-center items-center text-center tablet:text-left px-[1.5rem] tablet:px-[2.4375rem] desktop:px-[210px]">
				<div className="">
					<div>
						<h2 className="text-[2.5rem] desktop:text-[80px] uppercase font-antonio pb-4 ">
							{props.planet}
						</h2>
						<p className="text-[0.6875rem] desktop:text-[14px] leading-[1.375rem] font-leagueSpartan pb-8 tablet:pt-6 ">
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
				<div className="flex flex-col gap-4">
					<ButtonOne
						number="01"
						text="overview"
						buttonCheck={handleButtonCheck}
					/>
					<ButtonOne
						number="02"
						text="Internal Structure"
						buttonCheck={handleButtonCheck}
					/>
					<ButtonOne
						number="01"
						text="Surface Geology"
						buttonCheck={handleButtonCheck}
					/>
				</div>
			</div>
		</div>
	);
}
export default PlanetDisplay;
