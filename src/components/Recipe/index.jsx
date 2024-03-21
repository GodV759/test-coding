import React from 'react'
import * as Style from './style'
const Recipe = ({ recipe, handleClick }) => {
  return (
    <Style.Wrapper onClick={() => handleClick(recipe.name)}>
      <img src={recipe.image_url} alt={recipe.name} />
      <h3>{recipe.name}</h3>
    </Style.Wrapper>
  )
}

export default Recipe