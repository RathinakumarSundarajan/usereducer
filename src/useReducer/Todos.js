import React, { useReducer } from 'react'
import DisplayTodos from './DisplayTodos';
import './Todos.css'
import TodoContext from '../store/TodoContext';
import AddToCart from './AddToCart';



const intialState = []  //----------------this is mandatory----------------

function todoReducer (state, action) {
   switch(action.type){
    case 'ADD_TODO': 
       return [ ...state,{ id:state.length+1, name:action.payload }];
    case 'DETELE_TODO': 
       return state.filter(d=> d.id !== action.payload)
    case 'RESET_TODO':
        return initial(action.payload)

    default:return state
   }
}

function initial (intialState){    //-------------this function is optional-------------
    // const result = [...intialState, {id:'1', name:'Raja'}]
    return intialState
}

const Todos = () => {
    const [todos, todoDispatch] = useReducer(todoReducer, intialState, initial)

    const data = {
      todos,
      todoDispatch
    }


   
  return (
    <TodoContext.Provider value ={data}>
      <AddToCart/>
    <div className='header'>
        <h1>List You Need To Do</h1>
      <input type='text' onBlur={(e)=>todoDispatch({type:'ADD_TODO', payload:e.target.value})}/>
      <button onClick={()=>todoDispatch({type:'RESET_TODO', payload:intialState})}>Reset</button>          
      <DisplayTodos/>
    </div>
    </TodoContext.Provider>
  )
}
  
export default Todos
