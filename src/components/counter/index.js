import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CounterModule from 'modules/counter'

import { styles } from './styles.scss'


const Counter = props => {
  const { decrement, increment, value } = props

  return (
    <div className={styles}>
      <div className="value-wrapper">
        <span>{value}</span>
      </div>

      <div className="controls-container">
        <button className="control" onClick={decrement}>
          -
        </button>

        <button className="control" onClick={increment}>
          +
        </button>
      </div>
    </div>
  )
}


export default connect(
  state => ({
    value: CounterModule.selectors.value(state),
  }),
  dispatch => bindActionCreators({
    increment: CounterModule.actions.increment,
    decrement: CounterModule.actions.decrement,
  }, dispatch)
)(Counter)
