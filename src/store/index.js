import { createStore } from 'redux'

const counter = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const store = createStore(counter)
export default store
