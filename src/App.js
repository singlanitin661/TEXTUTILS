import "./App.css";
import Navbar from "./Components.js/Navbar";
import TextForm from "./Components.js/TextForm";

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" about="About" />
      <div className="container my-3">
        <TextForm text="Enter your text below" heading="Enter the text to analyze" />
      </div>
    </div>
  );
}

export default App;
