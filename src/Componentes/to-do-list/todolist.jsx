import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import	{ Home } from "lucide-react"
import "./ToDoList.css"

export function ToDoList() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState("")
  const [editInput, setEditInput] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [oldInputValue, setOldInputValue] = useState("")

  const saveTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setTodoInput("")
  }

  const toggleTodoDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    )
  }
  
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const startEditing = (todoText) => {
    setIsEditing(true)
    setEditInput(todoText)
    setOldInputValue(todoText)
  }

  const cancelEditing = () => {
    setIsEditing(false)
    setEditInput("")
  }

  const updateTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.text === oldInputValue ? { ...todo, text: editInput } : todo
      )
    )
    cancelEditing()
  }

  const handleTodoSubmit = (e) => {
    e.preventDefault()
    if (todoInput) saveTodo(todoInput)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    if (editInput) updateTodo()
  }

  function concluido(e) {
    e.preventDefault()
    alert("Parabéns, você concluíu sua tarefa!")
  }

  const navigate = useNavigate()

  function inicio() {
    navigate('/')
  }

  return (
    <>
    <header>
    <h1>TO DO LIST</h1>
    <button className='voltar' onClick={inicio}><Home size={50}/></button>
  </header>
  <div className="imagem-fundo">
    <div className="todo-app">
      {!isEditing ? (
        <form onSubmit={handleTodoSubmit}>
          <div className="bloco">
          <p><strong>Adicione uma nova tarefa:</strong></p>
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          /> </div>
          <button className="botao" type="submit"><i className="fa-solid fa-check"/></button>
        </form>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <div className="bloco">
          <p><strong>Edite sua tarefa:</strong></p>
          <input
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            placeholder="Editar tarefa"
          /> </div>
          <div className="bloco2">
          <button className="botao" type="submit"><i className="fa-solid fa-check"/></button>
          <button className="botao" onClick={cancelEditing}><i className="fa-solid fa-xmark"/></button>
          </div>
        </form>
      )}

        {todos.map((todo) => (
          <div key={todo.id} className={`todo ${todo.done ? "done" : ""}`}>
            <h3>{todo.text}</h3>
            <div className="bloco3">
            <button className="botao" onClick={(e) => { concluido(e); toggleTodoDone(todo.id); }}>
              <i className="fa-solid fa-check"/>
            </button>
            <button className="botao" onClick={() => startEditing(todo.text)}>
              <i className="fa-solid fa-pen"/>
            </button>
            <button className="botao" onClick={() => removeTodo(todo.id)}>
              <i className="fa-solid fa-xmark"/>
            </button> 
          </div>
          </div>
        ))}
      </div>
      </div>
    </>
  )
}

