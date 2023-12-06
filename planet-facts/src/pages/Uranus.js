import React, { useState } from "react";
import MobileOverview from "../components/mobileOverview";
import {
	planetUranus,
	planetUranusInternal,
	geologyUranus,
} from "../assets/addImages";
import data from "../data.js";
import PlanetDisplay from "../components/PlanetDisplay";
function Uranus() {
	return (
		<div>
			<MobileOverview />
			<PlanetDisplay
				planet={data.uranus.name}
				planetImg={planetUranus}
				planetBtnStyle="hidden tablet:flex items-center hover:bg-carbonBlue focus:bg-uranus border border-opacity-20 pt-buttonOneTop pb-buttonOneBottom text-[#fff] text-[0.75rem] font-leagueSpartan leading-[1.5625rem] tracking-[0.1607rem] uppercase"
				planetSource={data.uranus.overview.source}
				planetInternalImg={planetUranusInternal}
				planetGeologyImg={geologyUranus}
				planetSummary={data.uranus.overview.content}
				planetInternalSummary={data.uranus.structure.content}
				planetGeologySummary={data.uranus.geology.content}
				rotation={data.uranus.rotation}
				revTime={data.uranus.revolution}
				radius={data.uranus.radius}
				temp={data.uranus.temperature}
				mainClass="text-[#fff] desktop:flex justify-center desktop:pt-[7.875rem] pb-[5.4375rem] desktop:gap-[9.375rem] desktop:px-[10.3125rem]"
				mainImgClass="flex justify-center items-center px-[6.25rem] py-[3.9375rem] tablet:px-[14.875rem] tablet:pt-[5.8125rem] tablet:pb-[4.8125rem] desktop:px-0 "
			/>
		</div>
	);
}
export default Uranus;
