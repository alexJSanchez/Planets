import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Mercury from "./pages/Mercury";
import Venus from "./pages/Venus";
import Earth from "./pages/Earth";
import Mars from "./pages/Mars";
import Jupiter from "./pages/Jupiter";
import Saturn from "./pages/Saturn";
import Uranus from "./pages/Uranus";
import Neptune from "./pages/Neptune";
import "./App.css";
import "./index.css";

function App() {
	return (
		<div className="bg-backgroundStars bg-mysteriousDepth bg-contain top-0 left-0 w-full h-full ">
			<Nav />
			<Routes>
				<Route path="/" element={<Mercury />} />
				<Route path="mercury" element={<Mercury />} />
				<Route path="venus" element={<Venus />} />
				<Route path="earth" element={<Earth />} />
				<Route path="mars" element={<Mars />} />
				<Route path="jupiter" element={<Jupiter />} />
				<Route path="saturn" element={<Saturn />} />
				<Route path="uranus" element={<Uranus />} />
				<Route path="neptune" element={<Neptune />} />
			</Routes>
		</div>
	);
}

export default App;
