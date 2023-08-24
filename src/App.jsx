import React, { useState } from 'react'

import Header from './components/Header'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import TodoComputed from './components/TodoComputed'
import TodoFilter from './components/TodoFilter'

const initialStateTodos = [
  { id: 1, title: "Go To the GYm", completed: false },
  { id: 2, title: "Complete Online JavaScript curse", completed: true },
  { id: 3, title: "10 min meditation", completed: false },
  { id: 4, title: "CompleteCourse", completed: false }
]


const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }

    setTodos([...todos, newTodo]);
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearComplete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  const [filter, setFilter] = useState("all");
  
  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active": 
      return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed)
      default: 
      return todos;
    }
    
  }

  const changeFilter = (filter) => setFilter(filter);
  return ( 
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
    bg-contain bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]">

      <Header />

      <main className='container mx-auto px-4 mt-6'>

        <TodoCreate createTodo={createTodo} />

        <TodoList todos={filteredTodos()} 
        removeTodo={removeTodo} 
        updateTodo={updateTodo} />

        <TodoComputed computedItemsLeft={computedItemsLeft} clearComplete={clearComplete} />

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <section className='text-center mt-6 dark:text-gray-300'>
        Drag and drop
      </section>
    </div>
  )
}

export default App