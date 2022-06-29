import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {
  

  const {page, pokemons, isLoading} = useSelector((state) => state.pokemons)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch( getPokemons() );
  }, [])


  return (
    <>
        <h1> Pokemon App </h1>

        <span>Loading: { isLoading == true ? 'True' : 'False'}</span>
        <ul>
            { 
              pokemons.map((element, index) => {
                return <li key={index}>{element.name}</li>
              })
            }
        </ul>

        <button
          disabled = {isLoading}
          onClick = { () => dispatch( getPokemons(page))}
        >
          Next {page}
        </button>

    </>
  )
}
