import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    
    if (inputRef.current) {
      inputRef.current.value = '';
    } 
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult(0);
  }; 
 
  return ( 
    <div className="App">
      <div className="calculator-wrapper">    
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result}
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
          /> 
          <button className='btn' onClick={plus}>+</button>
          <button className='btn' onClick={minus}>-</button>
          <button className='btn' onClick={times}>x</button>
          <button className='btn' onClick={divide}>/</button>
          <br />
          <button className='btn' onClick={resetInput}>reset input</button>
          <br />
          <button className='btn' onClick={resetResult}>reset result</button>  
        </form>
        <p className='attribution'>Meta React Basics Solution Coded By <a href="https://devbyjacksen.com/" target="_blank">Jacksen</a></p>
      </div> 
    </div> 
  ); 
} 
 
export default App; 