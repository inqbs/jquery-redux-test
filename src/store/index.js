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

const todo = (state = { list: [], length: 0 }, action) => {
  const { idx, type, text } = action
  switch (type) {
    case 'ADD':
      ++state.length
      state.list.push({ idx: state.length, text: text })
      break
    case 'REMOVE':
      state.list = state.list.filter(it => it.idx !== idx)
      break
    case 'EDIT':
      state.list.find(it => it.idx === idx).text = text
      break
  }
  return state
}

export const CounterStore = createStore(counter)
export const TodoStore = createStore(todo)
