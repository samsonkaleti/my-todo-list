import React from 'react';

const Items = ({ items, toggleComplete, deleteItem }) => {  
    console.log(items)
   
    return (
        <div>
            {items.length > 0 ? (
                items.map((item) => ( 
                    
                    item && (
                        <div className='mt-2 py-4 border rounded-md h-12 p-4 shadow-lg w-[500px] flex justify-between items-center' key={item.id}>
                            <div className="flex items-center justify-center">
                                <input
                                    className='mr-6 h-4 w-6 mt-1'
                                    type="checkbox"
                                    checked={item.complete} // Ensure checked is always boolean
                                    onChange={() => toggleComplete(item.id)}
                                />
                                <p className='text-2xl' style={{ textDecoration: item.complete ? 'line-through' : 'none' }}>
                                    {item.name}
                                </p>
                            </div>
                            <button onClick={() => deleteItem(item.id)} className='px-2 bg-red-400 text-white py-1 rounded-lg'>
                                Delete
                            </button>
                        </div>
                    )
                ))
            ) : (
                <p>No items added yet.</p>
            )}
        </div>
    )
};

export default Items;
