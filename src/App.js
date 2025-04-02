
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const[Mode,newMode] = useState('light')
  const[alert,setAlert] = useState(null)
  const ToChangeMode=()=>{
    if(Mode==='light'){
      newMode('dark');
      document.body.style.backgroundColor = '#003554';
      document.body.style.color = '#FFFFFF';
      showAlert("success","Dark Mode Is Enabled")
     
    }else{
      newMode('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
      showAlert("success","Light Mode Is Enabled")
    }
  }
 
  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(()=>{
       setAlert(null);
    },2000)
  }
 
  return (
    <>  
  <Router>
  <NavBar ToggleMode={ToChangeMode} mode={Mode}></NavBar>
  <Alert alert={alert}></Alert>
  <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<TextArea showalert={showAlert} ToggleMode={ToChangeMode} />} />
  </Routes>
  </Router>
  
    </>
  );
}

export default App;
