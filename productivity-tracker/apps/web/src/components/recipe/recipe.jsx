
import React,{useState,useEffect} from 'react'
import recipesData from '../../data/recipes';
import { useNavigate, useParams } from 'react-router-dom';
import './recipe.css'
function Recipe(){
    const [data,setData]=useState(recipesData);
    const[recipe,setRecipe]=useState([]);
    const {id}=useParams();
    console.log(id)
    useEffect(()=>{
        const updated=data.filter((num)=>num.id===Number(id));
        console.log(updated)
        setRecipe(updated)
    },[])
    
    return(
        <div className='card'>
            <div className='card1'>

          
        {
             recipe.length>0&&(
                    <div key={recipe[0].id} className="recipe">
        <img
        className="image"
        src={recipe[0].image}
        alt={recipe[0].name}
        />

        <div className="details">
        <h2>{recipe[0].name}</h2>

        <div className="basic-info">
            <span>
            <strong>Category:</strong> {recipe[0].category}
            </span>

            <span>
            <strong>Cuisine:</strong> {recipe[0].cuisine}
            </span>

            <span>
            <strong>Prep Time:</strong> {recipe[0].prepTime}
            </span>

            <span>
            <strong>Cook Time:</strong> {recipe[0].cookTime}
            </span>

            <span>
            <strong>Servings:</strong> {recipe[0].servings}
            </span>

            <span>
            <strong>Difficulty:</strong> {recipe[0].difficulty}
            </span>
        </div>

        <div className="section">
            <h3>Ingredients</h3>

            <ul>
            {recipe[0].ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
            </ul>
        </div>

        <div className="section">
            <h3>Instructions</h3>

            <ol>
            {recipe[0].instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
            ))}
            </ol>
        </div>

        <div className="section">
            <h3>Tags</h3>

            <div className="tags">
            {recipe[0].tags.map((tag, index) => (
                <span key={index} className="tag">
                #{tag}
                </span>
            ))}
            </div>
        </div>
        </div>
        </div>
             )
        }
          </div>
        </div>
    )
}

export default Recipe;