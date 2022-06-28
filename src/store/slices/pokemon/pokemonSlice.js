import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
      page: 0,
      pokemons: [],
      isLoading: false,
  },
  reducers: {
    increment: (state) => {
        state.counter += 1
    },
    decrement: (state) => {
        state.counter -= 1
    },
    incrementByAmount: (state, action) => {
        state.counter += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = pokemonSlice.actions