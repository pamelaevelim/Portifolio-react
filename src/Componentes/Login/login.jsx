import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import	{ Home } from "lucide-react"

export function Login() {


    const navigate = useNavigate('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [registrado, setRegistrado] = useState(false)
    const [temDadosSalvos, setTemDadosSalvos] = useState(false)

    useEffect(() => {
        const dadosSalvos = localStorage.getItem('form')
        setTemDadosSalvos(!!dadosSalvos)
    }, [])

    function entrar(event) {
        event.preventDefault()

    if (!email || !senha) {
        alert("Preencha todos os campos!")
        return
    } 

    const dadosForm = { email, senha }
    localStorage.setItem('form', JSON.stringify(dadosForm))

    if (registrado) {
        alert ('Login realizado com sucesso!')
    } else {
        alert("Seja bem vindo à nossa plataforma.")
    }
    
    setEmail('')
    setSenha('')
    setTemDadosSalvos(true)
}

    function recuperarDados() {
        const dadosSalvos = localStorage.getItem('form')

        if (dadosSalvos) {
            const { email, senha } = JSON.parse(dadosSalvos)
            setEmail(email)
            setSenha(senha)

            localStorage.removeItem('form')
            setTemDadosSalvos(false)
        }
    }

    function inicio() {
        navigate('/#projetos')
      }

    return (
        <>
        <header className='header'>
            <img src="imagens/logo.svg" alt="Logo" />
        </header>
        <button className='Home' onClick={inicio}><Home size={15}/></button>
        <div id="Container">
            <div id="text">
            <h1>Acesse a plataforma</h1>
            <p className='introducao'>{registrado ? "Faça login para começar a construir seus projetos ainda hoje." : "Registre-se para começar a construir seus projetos ainda hoje."}</p>
            </div>
            <form>
                <div className='form-container'>
                <label><strong>Email:</strong></label>
                <input type="text" className='email' placeholder='Digite seu e-mail.'
                value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                
                <label><strong>Senha:</strong></label>
                <input type="password" className='password' placeholder='Digite sua senha.' 
                value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
            </form>
            <div id='acao'>
                <button  id='entrar' onClick={entrar}><strong>{registrado ? "Entrar" : "Criar" }</strong></button>
                <p id='Inscrever'>{registrado ? "Ainda não tem uma conta?" : "Já possui uma conta?"}<button className='funcao' onClick={() => setRegistrado(!registrado)}>
                    <strong>{registrado ? "Criar" : "Logar" }</strong></button></p>
                    {temDadosSalvos && (<button className='recuperar' onClick={recuperarDados}>Recuperar Dados</button>
                )}  
            </div>
        </div>
        </>
        
    )

}
