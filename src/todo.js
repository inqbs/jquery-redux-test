import { h } from 'dom-chef'
import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import { TodoStore } from './store/index'

//  store action
const add = ({ ...params }) => TodoStore.dispatch({ ...params, type: 'ADD' })
const edit = ({ ...params }) => TodoStore.dispatch({ ...params, type: 'EDIT' })
const remove = ({ ...params }) => TodoStore.dispatch({ ...params, type: 'REMOVE' })

//  add todo message and input clear
const send = () => {
  const $input = $('#text-input')
  const text = $input.val()
  if (!text) return
  add({ text })
  $input.val('')
}

//  change todo list when store change
TodoStore.subscribe(() => {
  const { list } = TodoStore.getState()

  const $todoListWrapper = $('#todo-list').empty()

  list.map(it => (
    <div className='col col-4' key='{it.idx}'>
      <div className='card mb-4'>
        <div className='card-body'>
          <p>{it.text}</p>
        </div>
        <div className='card-footer'>
          <button className='btn btn-danger btn-sm' onClick={() => remove({ idx: it.idx })}>삭제</button>
        </div>
      </div>
    </div>
  )).forEach(it => $todoListWrapper.append(it))
})

const el = (
  <div className='container my-4'>
    <div className='row'>
      <div className='col col-12'>
        <h2>Todo App</h2>
      </div>
    </div>
    <div className='row'>
      <div className='col cols-12'>
        <div className='input-group mb-4'>
          <input type='text' name='text' id='text-input' className='form-control' />
          <button className='btn input-group-append btn-primary' onClick={send}>전송</button>
        </div>
      </div>
    </div>
    <div className='row' id='todo-list' />
  </div>
)

document.body.appendChild(el)
