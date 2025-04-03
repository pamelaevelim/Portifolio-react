import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Componentes/Home/Home'
import { CEP } from './Componentes/api-cep/Cep'
import { Login } from './Componentes/Login/login'
import { ToDoList } from './Componentes/to-do-list/todolist'
import './App.css'

function App() {

  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/cep' element={<CEP />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/tarefas' element={<ToDoList />}/>
    </Routes>
  </Router>
  )
}

export default App
