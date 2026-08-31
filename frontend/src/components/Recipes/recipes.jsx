
import React,{useState,useEffect} from 'react'
import recipesData from '../../data/recipes';
import './index.css'
import { useNavigate } from 'react-router-dom';

function Recipes(){
    const [data,setData]=useState(recipesData);
    const navigate=useNavigate();

                {/* name
category
cuisine
prepTime
cookTime
servings
difficulty          <>
image */} 
    
    return(
        <div className='container'>
        {
             data.map((recipe)=>(
            <>
                <div className='recipe' onClick={()=>navigate(`/recipes/${recipe.id}`)}>
                    
                        <img className='image' src={recipe.image}/>
                    <div className='details'>
                        <h1>Name: {recipe.name}</h1>
                        <p>Category: {recipe.category}</p>
                        <p>Cuisine: {recipe.cuisine}</p>
                        <p>prepTime: {recipe.prepTime}</p>
                    </div>   
                </div>
            </>
        ))
        }
        </div>
    )
}

export default Recipes;