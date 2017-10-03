import {createStore} from 'redux'

// destructured arguments
const add = ({a, b}, c) => a + b
console.log(add({a: 1, b: 2}))

// Action generators - functions that return Action objects

const incrementCount = ( {incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ( {decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ( {count} ) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action directly

const countReducer = (state = { count:0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }
}


const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log('watching ',store.getState())
})




console.log(store.getState())

// I'd like to increment the count
// store.dispatch(
//   {
//     type: 'INCREMENT',
//     incrementBy: 5
//   }
// )
store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count: 101}))
