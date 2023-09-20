import React from 'react'
import './DisplayTodos.css'
import { useContext } from 'react'
import TodoContext from '../store/TodoContext'

const DisplayTodos = () => {

  const {todos,todoDispatch} = useContext(TodoContext)
  // console.log(todoctx)


  return (
    <>
    
    <div className='card' >
      {todos.map(todo =>
        <ul key={todo.id}>
            <li>{todo.id}</li> 
            <li>{todo.name}</li>
            <span><button onClick={()=> todoDispatch({type:'DETELE_TODO', payload:todo.id})}>Delete</button></span>
        </ul>)}
    </div>
    </>
  )
}

export default DisplayTodos
