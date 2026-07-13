import { useState, useEffect} from 'react'
import recipeService from './services/recipes'

const Dish = ({name, description, image}) => {

  return(
    <div>
      <h1> {name}</h1>
      <p> {description}</p>
      <img src={image} alt = {name}/>
    </div>
  )

}

const Recipes = () => {
  const [allRecipes, setRecipes] = useState([])

  useEffect(() => {
    recipeService
      .getAll()
      .then(initialRecipes => {
        setRecipes(initialRecipes)
      })
  }, [])

  console.log(allRecipes)


  return (
    
    <div>
      {allRecipes.map(recipe =>
        <Dish
          key={recipe.id}
          name={recipe.name}
          description ={recipe.description}
          image ={recipe.image}
        />

      )}

    </div>
  )
}

export default Recipes
