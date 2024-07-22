import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContex'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    //console.log(addTodo);
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(
      (prevTodo) => (prevTodo.id === id ? todo : prevTodo)
    ))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    console.log(todos);
    if (todos && todos.length > 0) {
      setTodos(todos)

    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])




  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-7 px-4">
        <div className=" bg-[#1c3865] w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 py-4 text-white">
<<<<<<< HEAD
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Schedule you Daily Tasks</h1>
=======
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Tasks</h1>
>>>>>>> 6069a62aa3d6179b34cb9cc255cbc56a8c10c245
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
         
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App 
