import React, { useEffect } from 'react'
import Form from './components/Form' 
import { nanoid } from 'nanoid' 
import { useState } from 'react'
import Items from './components/Items'  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Set Items in LocalStorage ; 
const setLocalStorage = (items) => { 
  return localStorage.setItem("list", JSON.stringify(items))
  
} 
// Get Items From Local Storage ; 
const DefaultValue = JSON.parse(localStorage.getItem('list') || '[]')

const App = () => { 
  const [addItems, setAddItems] = useState([])
  const AddItemsList = (formData) => { 
    const NewFormData = { 
      name: formData, 
      complete: false, 
      id: nanoid(),
    }  

    const newFormItems = [...addItems, NewFormData]
    setAddItems(newFormItems) 
    setLocalStorage(newFormItems) 
    toast.success('Item Added Successfully...')
  } 
  
  const deleteItem = (itemId) => {
    const newItem = addItems.filter(each => each.id !== itemId) 
    
    setAddItems(newItem)
    setLocalStorage(newItem) 
    toast.success('Item removed Successfully...')
  }  

  const toggleComplete = (itemId) => {
    const updatedItems = addItems.map(item =>
      item.id === itemId ? { ...item, complete: !item.complete } : item
    );
    setAddItems(updatedItems);
    setLocalStorage(updatedItems);
  };

  


  useEffect(() => {
    setAddItems(DefaultValue)
  }, [])
  
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center flex-col p-6'> 
      <ToastContainer position='top-center' />
      <h1 className='text-4xl font-semibold'>My Todo-List-App</h1> 
      <div className=" flex  items-center flex-col w-[800px] min-h-auto border  rounded-lg shadow-xl  p-4 m-4 mb-6">  
        <Form AddItemsList={AddItemsList} /> 
        <Items items={addItems} deleteItem={deleteItem} toggleComplete={toggleComplete}  />
        
      
      </div>
    </div>  
  )
}

export default App
