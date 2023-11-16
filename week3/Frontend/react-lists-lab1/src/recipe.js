import React from 'react'

function recipe({ recipe }) {
  return (
    <div className='recipe'>
        <h2 className='recipe-title'>{recipe.title}</h2>
        <p><strong>Name:</strong> {recipe.name}</p>
        <ul><strong>Ingredients:</strong> {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
        ))}</ul>
    </div>
  )
}

export default recipe