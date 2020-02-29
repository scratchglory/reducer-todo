export const initialState = [
  {
    item: "Learn about Javascript",
    completed: false,
    id: 1
  }
];

export const todoReducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: new Date()
      };
      return [...state, newTodo];

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
      //   let toggle = console.log(state);
      return toggle;

    case "CLEAR_COMPLETED":
      let clear = state.filter(task => {
        if (task.completed === true) {
          return !task.completed;
        } else {
          return task;
        }
      });

      return clear;

    default:
      return state;
  }
};
