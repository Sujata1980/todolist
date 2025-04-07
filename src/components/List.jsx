import React from 'react'
import { MdDelete } from "react-icons/md";

const List = ({item,deleteItem}) => {
  return (
    <div className='listContainer'>
    <li className="listBox">{item}</li>
    <span onClick={deleteItem}><MdDelete size={35} style={{marginTop:'20px'}}/></span>
    </div>
  )
}

export default List
