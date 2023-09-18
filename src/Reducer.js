import { ADD_TODO, CLEAR_TODOS, TOGGLE_TODO } from './Actions'

const reducer = (todos, action) => {
  switch (action.type) {
    case CLEAR_TODOS:
      return todos.filter((todo) => !todo.complete)
    case ADD_TODO:
      return [
        ...todos,
        { id: Date.now(), complete: false, name: action.payload.name },
      ]
    case TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      )
    default:
      return new Error('error')
  }
}

export default reducer
