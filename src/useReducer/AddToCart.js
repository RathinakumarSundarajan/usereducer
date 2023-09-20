import React, {useContext} from 'react'
import TodoContext from '../store/TodoContext'


const AddToCart = () => {

    const {todos} = useContext(TodoContext)

  return (
    <div>
     <h1>Add To Cart : {todos.length}</h1> 
    </div>
  )
}

export default AddToCart
