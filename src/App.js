import "./App.css";
import About from "./Components.js/About";
import Navbar from "./Components.js/Navbar";
import TextForm from "./Components.js/TextForm";
function App() {
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtils" />
    <div className="container my-3">
    {/* <TextForm heading="Enter the text to analyze below"/> */}
    <About/>
    </div>
    </> 
  );
}

export default App;