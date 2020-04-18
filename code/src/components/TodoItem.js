import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

export const TodoItem = ({ itemIndex }) => {
  // gets the item from the store based on index
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  // Remove the item from list when clicked on remove button
  const handleRemove = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    )
  }

  // Sets status to done 
  const handleOnChange = event => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    })
    )
  }

  return (
    <div className={`todo-item ${item.done ? "done" : ""}`}>
      <input type="checkbox"
        onChange={handleOnChange}
        className="todo-item-check"
        checked={item.done ? "checked" : ""}
      ></input>
      <span className="todo-item-description">{item.description}</span>
      <a className="todo-item-remove" onClick={handleRemove}>[Remove]</a>
    </div>
  )
}