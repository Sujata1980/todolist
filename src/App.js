import React,{useState} from 'react';
import './App.css';
import InputBox from './components/InputBox';
import List from './components/List';

function App() {
  
  const[list,setList]=useState([]);

 const addList = (data) =>{
  if (!list.includes(data)){
  setList([...list,data]) 
  } 
  else{
    alert("Already included in the list")
  }
 };

 const handleDeleteItem = (id) =>{
  // alert (id)
  if(window.confirm("Are you sure you want to delete this."))
  {const newList=[...list]
  const filterItem = newList.filter((value,i)=>{
    return i !== id
  })
  setList(filterItem);
 }}

 
  return (
    <>
    <div className="container">
      <div className="main-container">
      <h1>TO - DO - APP</h1>
      <hr style={{width:'450px'}}/>
      </div>
      <div className="center-container">
        <InputBox  addList={addList}/>
      </div>
      <div className="list">
        {
          list.map((item,id)=>{
            return(
              
              <List key={id} item={item}  deleteItem={()=>handleDeleteItem(id)}/>
              
            )
                       
              
            
          })
        }
      </div>
      
    </div>
    </>
  );
}

export default App;
