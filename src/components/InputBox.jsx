import React,{useState} from 'react'
import { FaPlusCircle } from "react-icons/fa";


const InputBox = ({addList}) => {
    const[inputValue,setInputValue]=useState('');

    const handleChange = (e) =>{
        setInputValue(e.target.value);

    }

    const handleClick = () =>{
        addList(inputValue);
        setInputValue('');
    }
  return (
    <div className='inputContainer'>
      <input type='text' placeholder='Enter Your To Do' 
      className='inputBox' onChange={handleChange} value={inputValue}/>
      <span onClick={handleClick}><FaPlusCircle  size={40} /></span>
    </div>
    
  )
}

export default InputBox

