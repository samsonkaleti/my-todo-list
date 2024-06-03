import React, { useState } from 'react' 
import { toast } from 'react-toastify'

const Form = ({ AddItemsList }) => { 
    const [formData, setFormData] = useState("")  
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!formData) {
            toast.error("Please Provide a Valid input")
            return
        } ; 
        AddItemsList(formData) 
        setFormData("")
    }

  return (
    <form onSubmit={handleSubmit}>
          <input className='outline-none border border-blue-300 rounded-md p-2 w-96' type="text" name="" value={formData} onChange={(event) => {
              setFormData(event.target.value)
          }}  /> 
          <button type='submit' className='ml-2 px-4 py-2 bg-blue-400 rounded-md font-semibold hover:bg-blue-500'>AddItems</button>
    </form>
  )
}

export default Form
