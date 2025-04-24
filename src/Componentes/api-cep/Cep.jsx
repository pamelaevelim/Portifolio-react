import { useState } from 'react'
import	{ Home } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import './Cep.css'

export function CEP() {

  const navigate = useNavigate()

  const [nome, setNome]= useState('')
  const [email, setEmail]= useState('')
  const [cep, setCep]= useState('')
  const [rua, setRua]= useState('')
  const [bairro, setBairro]= useState('')
  const [cidade, setCidade]= useState('')
  const [estado, setEstado]= useState('')

  function inicio() {
    navigate('/#projetos')
  }
  
  function LimparCampos() {
    setNome('')
    setEmail('')
    setCep('')
    setRua('')
    setBairro('')
    setCidade('')
    setEstado('')
  }

  function handleCadastro() {
    if (nome === '' || email === '' || cep === '' || rua === '' || bairro === '' || cidade === '' || estado === '') {
      alert('Preencha todos os campos.')
    } else {
      alert('Cadastro realizado com sucesso!')
      LimparCampos()
    }
  }
  
  function pesquisarCep(valor) {
    const cepFormatado = valor.replace(/\D/g, '')

    setCep(cepFormatado)

    if (cepFormatado.length === 8 ) {
      setRua('...')
      setBairro('...')
      setCidade('...')
      setEstado('...')

      fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`)
      .then(response => response.json())
      .then(data => {

      if (!data.erro) {
        setRua(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        setEstado(data.uf)
      } else {
        alert("CEP não encontrado")
        LimparCampos()
      }
    })
    .catch(() => alert('Erro ao buscar o CEP.'))
}
}
  

  return (
    <>
    <button className='home' onClick={inicio}><Home size={20}/></button>
    <div className="container">
      <h2>Cadastro de Usuário</h2>
      <label>Nome: </label>
      <input className='campo' type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      <label>E-mail: </label>
      <input className='campo' type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <label>CEP: </label>
      <input className='campo' type="text" value={cep} onChange={(event) => pesquisarCep(event.target.value)} />
      <label>Rua: </label>
      <input className='campo' type="text" value={rua} onChange={(event) => setRua(event.target.value)}/>
      <label>Bairro: </label>
      <input className='campo' type="text" value={bairro} onChange={(event) => setBairro(event.target.value)}/>
      <label>Cidade: </label>
      <input className='campo' type="text" value={cidade} onChange={(event) => setCidade(event.target.value)}/>
      <label>Estado: </label>
      <input className='campo' type="text" value={estado} onChange={(event) => setEstado(event.target.value)}/>
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
    </>
  )
}
