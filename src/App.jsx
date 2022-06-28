import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

import logo from './logo.svg'
import './App.css'

function App() {

  const {counter} = useSelector( state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Count is: {counter}</p>
        <p>
          <button type="button" onClick={() => {dispatch(increment())}}>
            Increment
          </button>
          <button type="button" onClick={() => {dispatch(incrementByAmount(2))}}>
            Increment by 2
          </button>
          <button type="button" onClick={() => {dispatch(decrement())}}>
            Decrement
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
