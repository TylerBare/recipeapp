import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.calories}>Calories: {calories}</p>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient =>(
                    <li className={style.ingredient}>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt=""/>
        </div>
    );
}

export default Recipe;