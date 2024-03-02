import { createStore } from 'redux';

const initialState = {
  todos: []
};

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const Imp_Done = 'Imp_Done'

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
      text
    }
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: {
      id
    }
  });
  export const ImpDone = (id) => ({
    type: 'Imp_Done',
    payload: {
      id
    }
  });
  

  




const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload.text, completed: false, imp: false }]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case Imp_Done:
        return{
            ...state,
            todos: state.todos.map(todo =>
              todo.id === action.payload.id ? { ...todo, imp: !todo.imp } : todo
            )
        }
    default:
      return state;
  }
};


const store = createStore(todoReducer);

export default store;




