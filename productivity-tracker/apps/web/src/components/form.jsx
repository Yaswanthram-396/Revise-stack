

import React, { useState } from 'react';
import './form.css'

function FormElement({onsbmit}){

const [value,setvalue]=useState({});

const handleAddItem=(e)=>{
    e.preventDefault();
    if(!value.title||!value.description)return
    console.log(value)
    onsbmit(value)

}
return(
    <form onSubmit={handleAddItem}>
        <div className='col'>

            <label>Title</label>
            <input value={value.title??''} onChange={(e)=>setvalue({...value,title:e.target.value})}/>
            <label>Description</label>
            <input value={value.description??''} onChange={(e)=>setvalue({...value,description:e.target.value})}/>
            
        </div>
        <button type="submit">Add</button>
    </form>
)


}
export default FormElement;