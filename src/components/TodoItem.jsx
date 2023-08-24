import React from 'react'
import CrossIcon from './icons/IconCross'
import IconCheck from './icons/IconCheck'


const TodoItem = ({ todo, removeTodo, updateTodo}) => {
    const { id, title, completed } = todo
    return (

        <article className='flex gap-4 border-b-gray-400 border-b dark:bg-gray-800'>

            <button onClick={() => updateTodo(id)}
            className={` h-5 w-5 flex-none rounded-full border-2 
                ${completed
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center"
                    : "inline-block "}`}>
                {completed && <IconCheck />}
            </button>
            <p className={`text-gray-600 grow dark:text-gray-300 ${completed && "line-through"}`}>{title}</p>

            <button className='flex-none' onClick={() => removeTodo(id)}>
                <CrossIcon /></button>
        </article>

    )
}

export default TodoItem