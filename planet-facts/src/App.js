import logo from "./logo.svg";
import Nav from "./components/Nav";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="bg-[#000] ">
      <div className="bg-backgroundStars bg-mysteriousDepth fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat">
        <Nav />
      </div>
    </div>
  );
}

export default App;
