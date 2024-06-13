import { useRef, useReducer } from 'react'
import TodoList from './TodoList'
import { ADD_TODO, CLEAR_TODOS, TOGGLE_TODO } from './Actions'
import reducer from './Reducer'

function App() {
  let [todos, dispatch] = useReducer(reducer, [])
  const todoNameRef = useRef()

  const toggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: { id: id } })
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <br />
      <input type="text" ref={todoNameRef} />
      <button
        onClick={() => {
          const name = todoNameRef.current.value
          dispatch({ type: ADD_TODO, payload: { name: name } })
          todoNameRef.current.value = null
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch({ type: CLEAR_TODOS })}>Clear</button>
      <br />
      <br />
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  )
}

export default App