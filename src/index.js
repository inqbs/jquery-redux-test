import { h } from 'dom-chef'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import { CounterStore } from './store/index'

//  store actions
const increment = () => CounterStore.dispatch({ type: 'INCREMENT' })
const decrement = () => CounterStore.dispatch({ type: 'DECREMENT' })

//  change text on view when store change
CounterStore.subscribe(() => {
  const state = CounterStore.getState()
  $('#count').text(() => state?.counter ?? 0)
})

const el = (
  <div className='container my-4'>
    <div className='row'>
      <div className='col col-12'>
        <h2>hello webpack</h2>
      </div>
    </div>
    <div className='row'>
      <div className='col col-12'>
        <div className='mb-3'>
          <span id='count' className='badge bg-dark'>0</span>
        </div>
        <div className='btn-group btn-group-sm'>
          <button className='btn btn-primary' onClick={increment}>+</button>
          <button className='btn btn-secondary' onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  </div>
)

document.body.appendChild(el)
