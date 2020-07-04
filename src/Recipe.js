import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <a className={style.url} href={url} target="_blank"><h1 href={url} target="_blank" className={style.title}>{title}</h1></a>
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