import logo from './logo.svg';
import './App.css';
import InputFolder from './component/InputFolder';
import Buttons from './component/Buttons';
import {useState} from 'react';

function App() {
  
  function onclickbutton(event){
     console.log(event.target.value);
     if (event.target.value==="c") {
      setinptxt("");
     }
     else if( event.target.value==="="){
      setinptxt(eval(inptxt))
     }
     else{
      let setdisplay = inptxt + event.target.value;
     setinptxt(setdisplay);
     }
  }
  const [inptxt,setinptxt]=useState("");
  return (
    <>
    <div className='container'>
     <InputFolder inptxt ={inptxt} />
     <Buttons onclickbutton={onclickbutton}/>
    </div>
    </>
  );
}

export default App;
