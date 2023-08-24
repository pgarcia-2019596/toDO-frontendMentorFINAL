import React, { useState } from 'react'

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState('')

    const handleSubmitAdd  = (e) =>{

        e.preventDefault();
        if (!title.trim()){
            return setTitle("")
        }
        createTodo(title);
        setTitle("");
    }

    return (
        <form className='bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 dark:bg-gray-800' onSubmit={handleSubmitAdd}>
            <span className='rounded-full border-2 inline-block h-5 w-5'></span>
            <input type='text'
                placeholder='Create a new todo...'
                className='w-full text-gray-400 outline-none dark:bg-gray-800'
                value={title}
                onChange={(e) => setTitle(e.target.value)}></input>
        </form>
    )
}

export default TodoCreate