import "./App.css";
import About from "./Components.js/About";
import Navbar from "./Components.js/Navbar";
import TextForm from "./Components.js/TextForm";
import Alert from "./Components.js/Alert";
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1000);
  }
  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been enabled" ,"success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been enabled" ,"success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3 mb-7">
          <Routes>
            <Route exact path="about/*" element={<About  mode={mode}/>} />
            <Route exact path="/" element={<TextForm  showAlert={showAlert}  mode={mode} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>} />
          </Routes>
        </div>
      </Router>
    </> 
  );
}

export default App;