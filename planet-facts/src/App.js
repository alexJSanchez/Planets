import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Mercury from "./pages/Mercury";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="bg-backgroundStars bg-mysteriousDepth bg-contain fixed top-0 left-0 w-full h-full ">
      <Nav />
      <Routes>
        <Route path="/mercury" element={<Mercury />} />
      </Routes>
    </div>
  );
}

export default App;
