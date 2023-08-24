import React from 'react'

const TodoComputed = ({computedItemsLeft, clearComplete}) => {
    return (
        <section className='py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800'>
            <span className='text-gray-400'>{computedItemsLeft} Items Left</span>
            <button onClick={clearComplete} className='text-gray-400'>Clear completed</button>
        </section>
    )
}

export default TodoComputed