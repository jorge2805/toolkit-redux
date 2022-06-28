import {startLoadingPokemons, setPokemons} from './pokemonSlice';

export const getPokemons = ( page = 0) => {
  return async(dispatch, getState) => {
    
    dispatch(startLoadingPokemons());

    // http get

    // dispatch(setPokemons());

  }
}
