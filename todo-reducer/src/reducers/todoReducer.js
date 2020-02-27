export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    }
  ]
};

export const todoReducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: new Date()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case "TOGGLE_EDIT":
      let toggle = state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
      return toggle;
    case "CLEAR_COMPLETED":
      let clear = console.log(state);
      return clear;
    default:
      return state;
  }
};
