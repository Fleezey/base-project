import { BaseModule } from 'redux-data-module'


const Counter = new BaseModule({
  moduleKey: 'counter',

  initialState: {
    value: 0,
  }
})

Counter.registerSelector('value', (state, moduleState) => moduleState.value, value => value)

Counter.registerAction('increment', () => dispatch => dispatch({ type: Counter.actionKeys.increment }))
Counter.registerReducer(Counter.actionKeys.increment, state => ({ ...state, value: state.value + 1 }))

Counter.registerAction('decrement', () => dispatch => dispatch({ type: Counter.actionKeys.decrement }))
Counter.registerReducer(Counter.actionKeys.decrement, state => ({ ...state, value: state.value - 1 }))


export default Counter
