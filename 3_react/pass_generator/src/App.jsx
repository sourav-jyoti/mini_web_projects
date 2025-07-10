import { useEffect,useRef,useEffect, useState } from 'react'

import './App.css'

function App() {
  const [password, setpassword] = useState("");
  
  const [length, setlength] = useState(5);
  const [numcheck, setnumcheck] = useState(true);
  const [specialchcheck, setspecialchcheck] = useState(true);
  const inputRef = useRef();

 
  const passGenerator = useCallback(() =>{

    let genString = "abcdefghigklmnopqrstuvwxyz";

    let tempPass="";

    if(numcheck == true) {genString+="1234567890" };
    if(specialchcheck == true) {genString +="!@#$%^&*()_+" };

    for(let i=0;i<=length;i++){
      const index = Math.floor(Math.random() * genString.length)+1;

      tempPass+=genString[index];
    }

    setpassword((prev)=>prev=tempPass);
  },[length,numcheck,specialchcheck])

  useEffect(() => {
    passGenerator();
    
  }, [length,numcheck,specialchcheck]);
  
  function focusonText() {
    console.log("copy");
    window.navigator.clipboard.writeText(password);
    inputRef.current.focus();
  }


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-blue-500'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input ref={inputRef} className='outline-none w-full py-1 px-3 bg-gray-100 text-orange-500' readOnly  value ={password}/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={focusonText}>copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input type="range" max={30} min={5} name="length" step={1} value={length} onChange={(e)=>setlength((prev)=> prev = e.target.value)}/> 
            <label htmlFor="length" >Length</label>
          </div>
        </div>
        
        <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={numcheck} onChange={(e)=>setnumcheck((prev) => !prev)}/>
            <label htmlFor="number" >number</label>
        </div>

        <div className='flex items-center gap-x-1'>
            <input type="checkbox" checked={specialchcheck} onChange={(e)=>setspecialchcheck((prev) => !prev)}/>
            <label htmlFor="specialch" >special Char</label>
        </div>

      </div>
    </>
  )
}

export default App
