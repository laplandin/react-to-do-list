// Action types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
      case ADD_TODO:
          return [
              ...state,
              {
                  status: false,
                  name: action.data.name,
                  description: action.data.description,
                  id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
              }
          ];
      case REMOVE_TODO:
          return state.filter((item, index) => index !== action.index)
          break;
      case TOGGLE_TODO:
          console.log(action, state);
          return state.map((item, index) => {
              if (item.id === action.index) {
                  return Object.assign({}, item, {
                      status: !item.status
                  })
              }
              return item;
          });
      default: return state;
      break;
  }
}

// Actions
export function addToDo(todo) {
    return {type: ADD_TODO, data: {...todo}}
}

export function removeToDo(index) {
    return {type: REMOVE_TODO, index}
}

export function toggleToDo(index) {
    return {type: TOGGLE_TODO, index}
}