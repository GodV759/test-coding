import React, {useState ,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import data from '../../assets/data/data.json'
import { TextWrapper, Wrapper } from './style';
const RecipeDetails = (props) => {
    const [searchParams] = useSearchParams();
    const [recipe, setRecipe] = useState({})

    const name = searchParams.get('name');
    const handleSelect = (name) => {
        const filteredRecipe = data.recipes.find((item) => item.name === name);
        if (filteredRecipe) {
         setRecipe(filteredRecipe)
        }
      };
    useEffect(() => {
      handleSelect(name)
    }, [name])
        console.log('recipe: ', recipe);
    return (
      <Wrapper>
            <h1>{recipe.name}</h1>
            <img src={recipe.image_url} alt={recipe.name} />
            <TextWrapper>
            <b>Ingredients:</b>
            {recipe.ingredients && recipe.ingredients.map(item => (
                <p>- {item}</p>
            ))}
            </TextWrapper>
            <TextWrapper>
            <b>Instructions:</b>
            {recipe.instructions && recipe.instructions.map(item => (
                <p>- {item}</p>
            ))}
            </TextWrapper>
      </Wrapper>
  )
}

export default RecipeDetails