import { useState } from "react";
import ButtonOne from "./buttonOne";
import Informartion from "./information";
function PlanetDisplay(props) {
	const [checkButton, setButtonCheck] = useState("overview");

	const handleButtonCheck = (text) => {
		setButtonCheck(text); // Update the buttonCheck state when a button is clicked
	};
	return (
		<div>
			<div className={`${props.mainClass}`}>
				<div className={`${props.mainImgClass}`}>
					<img src={props.planetImg} className="tablet:hidden " />
					{checkButton == "overview" ? (
						<img
							src={props.planetImg}
							alt={props.planet}
							className="hidden tablet:block "
						/>
					) : checkButton == "Internal Structure" ? (
						<img
							src={props.planetInternalImg}
							alt={props.planet}
							className="hidden tablet:block "
						/>
					) : (
						<div className="hidden tablet:block relative">
							<img src={props.planetImg} alt={props.planet} className="" />
							<img
								alt={props.planet}
								className="absolute top-[230px] tablet:top-[220px] laptop:top-[300px]  inset-1/2 -translate-x-1/2 -translate-y-1/2 "
								src={props.planetGeologyImg}
							/>
						</div>
					)}
				</div>
				<div className="tablet:mb-[27px] flex flex-col tablet:flex-row desktop:flex-col tablet:justify-center items-center text-center tablet:text-left px-[1.5rem] tablet:px-[2.4375rem] desktop:px-0 desktop:max-w-[350px]">
					<div className="">
						<div className="tablet:pr-16 desktop:pr-0">
							<h2 className="text-[2.5rem] tablet:text-[3rem] desktop:text-[5rem] uppercase font-antonio pb-4 ">
								{props.planet}
							</h2>
							<p className="text-[0.6875rem] desktop:text-[14px] leading-[1.375rem] font-leagueSpartan pb-8 tablet:pt-6 ">
								{checkButton == "overview" ? (
									<p>{props.planetSummary}</p>
								) : checkButton == "Internal Structure" ? (
									<p>{props.planetInternalSummary}</p>
								) : checkButton == "Surface Geology" ? (
									<p className="">{props.planetGeologySummary}</p>
								) : null}
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
					<div className="flex flex-col gap-4 desktop:w-full desktop:max-w-[350px]">
						<ButtonOne
							number="01"
							text="overview"
							btnStyle={props.planetBtnStyle}
							buttonCheck={handleButtonCheck}
						/>
						<ButtonOne
							number="02"
							text="Internal Structure"
							btnStyle={props.planetBtnStyle}
							buttonCheck={handleButtonCheck}
						/>
						<ButtonOne
							number="01"
							text="Surface Geology"
							btnStyle={props.planetBtnStyle}
							buttonCheck={handleButtonCheck}
						/>
					</div>
				</div>
			</div>
			<Informartion
				rotation={props.rotation}
				revolution={props.revTime}
				radius={props.radius}
				temperature={props.temp}
			/>
		</div>
	);
}
export default PlanetDisplay;
