import React from 'react'
import { TodoItem } from '../components/TodoItem'
import { TodoInput } from '../components/TodoInput'
import { useSelector, useDispatch } from 'react-redux'
import '../styling/todo-summary.css'
import { todos } from '../reducers/todos'

export const TodoSummary = () => {
  const dispatch = useDispatch()
  const list = useSelector(store => store.todos.list)

  // clears all items in the todo
  const handleClick = () => {
    dispatch(todos.actions.clearAll())
  }

  // count how many tasks are done using filter 
  const numDone = list.items.filter(item => item.done).length


  return (
    <section className="todo-summary">
      <p>
        {numDone}/{list.items.length} are completed
      </p>
      <p>
        <button onClick={handleClick}>Clear all</button>
      </p>
    </section>
  )
}