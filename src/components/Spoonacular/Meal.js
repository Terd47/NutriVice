import React, {useState, useEffect} from "react";

export default function Meal({ meal }) {
 const [imageUrl, setImageUrl] = useState("");
  

 useEffect(() => {
     fetch(
         `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=949cc38773a947e191d05b89a2b7e263&includeNutrition=false`
     )
     .then((respone) => respone.json())
     .then((data) => {
         setImageUrl(data.image);
     })
     .catch(() => {
         console.log("error");
     })
 }, [meal.id])


    return(
        <article>
           <h1>{meal.title}</h1>
           <img src={imageUrl} alt="recipe" />
           <ul>
               <li>Preperation time: {meal.readyInMinute} minutes </li>
               <li>Number of servings: {meal.servings} </li>
           </ul>

           <a href={meal.aourceUrl}>Go to recipe</a>
        </article>
    )
}