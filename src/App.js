import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';



const App = () => {

  const APP_ID = "6cd4499b";
  const APP_KEY = "452bff4eca63a951c49a771d1bbdab9f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
    async function fecthData(){
      getRecipes();
    }
    fecthData();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  if(query===''){
    return(
      <div className="App">
        <h1 className="main-title">Recipe Finder</h1>
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar-1" type="text" value={search} onChange={updateSearch}/>
          <button className="search-button-1" type="submit">Search</button>
        </form>
      </div>
    )
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={Math.round(recipe.recipe.calories, 0)} image={recipe.recipe.image} ingredients = {recipe.recipe.ingredients}/>
      ))}
    </div>
    </div>
  );
};

export default App;
