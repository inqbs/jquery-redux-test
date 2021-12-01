import { h } from 'dom-chef'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import store from './store/index'

//  change text on view when store change
store.subscribe(() => {
  const state = store.getState()

  console.log('store subscribed..', state)
  $('#count').text(() => state?.counter ?? 0)
})

//  store actions
const increment = () => store.dispatch({ type: 'INCREMENT' })
const decrement = () => store.dispatch({ type: 'DECREMENT' })

const el = (
  <div id='app' className='container'>
    <h1>hello webpack</h1>
    <div className='row'>
      <div className='col col-12'>
        <div className='btn-group'>
          <button className='btn btn-primary' onClick={increment}>+</button>
          <button className='btn btn-secondary' onClick={decrement}>-</button>
        </div>
      </div>
    </div>
    <p id='count'>0</p>
  </div>
)

document.body.appendChild(el)
