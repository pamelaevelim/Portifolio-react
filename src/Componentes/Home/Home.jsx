import { useEffect, useState } from 'react'
import	{ Sun, Moon } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'


export function Home() {

const navigate = useNavigate()

const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.25 },
  }

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('tema') === 'dark-mode'
  })

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [video, setVideo] = useState(false)
  const [video2, setVideo2] = useState(false)
  const [video3, setVideo3] = useState(false)

  useEffect(() => {
      const tema = isDarkMode ? "dark-mode" : "light-mode"
      document.body.className = tema
      localStorage.setItem('tema', tema)
  }, [isDarkMode])

  function handleEnvio(event) {
    event.preventDefault()

    if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos.")
    } else {
    alert("Obrigada pela sua mensagem. Entraremos em contato!")
    setNome('')
    setEmail('')
    setMensagem('')
    }
  }

  function AbrirProjeto(event, caminho) {
    event.preventDefault()
    navigate(caminho)
  }

  function abrirVideo(url) {
    window.open(url, "_blank")
  }
 
  return ( 
    <div className="Projeto">
        <nav>
        <motion.a variants={parent} initial="variantA" whileHover="variantB" href="#contato">Redes</motion.a>
        <motion.a variants={parent} initial="variantA" whileHover="variantB" href="#projetos">Projetos</motion.a>
        <motion.a variants={parent} initial="variantA" whileHover="variantB" href="#serviços">Serviços</motion.a>
        <motion.a variants={parent} initial="variantA" whileHover="variantB" href="#form">Contato</motion.a>
      <motion.button variants={parent} initial="variantA" whileHover="variantB" className='tema' onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? <Sun size={20} className='dark-ligth'/> : <Moon size={20} />}
      </motion.button>
      </nav>
      <div id='home' className="tela1"> 
            <div className="apresentacao">
            <img className="perfil" src="imagens/perfil.png" alt="Perfil"/>
              <p className="ola">
                Hellow Word! Meu nome é <b>Pâmela Évelim</b> e sou
              </p>
              <h1>Desenvolvedora Fullstack</h1>
              <p className="paragrafo">
                Tranformo necessidades em aplicações reais, envolventes e funcionais. Muito além do
                código; busco transformar ideias em produtos digitais inovadores, através de soluções que unam
                estética e funcionalidade.
              </p>
            </div>
            <div className="barraIcones">
                <div id="icones">
                    <img id='imagem-icones' className="GitHub" src="imagens/GitHub.svg" alt="GitHub"/>
                    <p>GitHub</p>
                </div>
                <div id="icones">
                    <img id='imagem-icones' className="html" src="imagens/HTML.svg" alt="HTML"/>
                    <p>HTML</p>
                </div>
                <div id="icones">
                    <img id='imagem-icones' className="css" src="imagens/CSS.svg" alt="CSS"/>
                    <p>CSS</p>
                </div>
                <div id="icones">
                    <img id='imagem-icones' className="javascript" src="imagens/JavaScript.svg" alt="JavaScript"/>
                    <p>Javascript</p>
                </div>
                <div id="icones">
                    <img id='imagem-icones' className="react" src="imagens/React.svg" alt="React"/>
                    <p>React</p>
                </div>
                <div id="icones">
                    <img id='imagem-icones' className="node" src="imagens/Node.js.svg" alt="Node.js"/>
                    <p>Node.js</p>
                </div>
            </div>
            <motion.img className='seta'
            animate={{ y: [0, 10, 0]}}
            transition={{ duration: 1, repeat: Infinity}}
            src="imagens/CaretDoubleDown.png" alt='Seta para baixo'></motion.img>
        </div>
        <section id='projetos'>
        <div className="tela2">
            <div className="trabalho">
            <motion.p animate={{scale: [1, 1.5, 1]}}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut"}}>Meu trabalho</motion.p>
            <b>Veja os projetos em destaque</b>
            </div>
            <div className="linha">
                    <div className="projetos">
                        <img className="exibicao" src='imagens/Cep.png'/>
                        <div>
                        <div className='redirecionamento'>
                        <button className="abrir-projeto" onClick={(event) => AbrirProjeto(event, '/cep')}><strong>API Via Cep</strong></button>
                        <motion.button variants={parent} 
                        initial="variantA" 
                        whileHover="variantB" 
                        transition={0.5} 
                        className='video'
                        onMouseEnter={() => setVideo(true)}
                        onMouseLeave={() => setVideo(false)}
                        onClick={() => abrirVideo("https://www.youtube.com/embed/SKbb19nE7-M?autoplay=1&mute=1")}
                        >
                        <strong>ver</strong>
                        </motion.button>
                        </div>
                        {video && (
                            <iframe className='video-frame'
                            src='https://www.youtube.com/embed/SKbb19nE7-M?autoplay=1&mute=1'
                            />
                        )}
                        </div>
                        <p>Cadastro de Usuário com validação em tempo real do cep.</p>
                    </div>
                <div className="projetos">
                    <img src='imagens/login.png' className="exibicao"/>
                    <div>
                    <div className='redirecionamento'>
                    <button className="abrir-projeto" onClick={(event) => AbrirProjeto(event, '/login')}><strong>Login Page</strong></button>
                        <motion.button variants={parent} 
                        initial="variantA" 
                        whileHover="variantB" 
                        transition={0.5} 
                        className='video'
                        onMouseEnter={() => setVideo2(true)}
                        onMouseLeave={() => setVideo2(false)}
                        onClick={() => abrirVideo("https://www.youtube.com/embed/LH1kJELF63k?autoplay=1&mute=1")}
                        >
                        <strong>ver</strong>
                        </motion.button>
                        </div>
                        {video2 && (
                            <iframe className='video-frame'
                            src='https://www.youtube.com/embed/LH1kJELF63k?autoplay=1&mute=1'
                            />
                        )}
                        </div>
                    <p>Formulário responsivo para login utilizando localStorage.</p>
                </div>
                <div className="projetos">
                    <img src="imagens/todolist.jpeg" className="exibicao"/>
                    <div>
                    <div className='redirecionamento'>
                    <button className="abrir-projeto" onClick={(event) => AbrirProjeto(event, '/tarefas')}><strong>To Do List</strong></button>
                        <motion.button variants={parent} 
                        initial="variantA" 
                        whileHover="variantB" 
                        transition={0.5} 
                        className='video'
                        onMouseEnter={() => setVideo3(true)}
                        onMouseLeave={() => setVideo3(false)}
                        onClick={() => abrirVideo("https://www.youtube.com/embed/gg4VjYrHG4k?autoplay=1&mute=1")}
                        >
                        <strong>ver</strong>
                        </motion.button>
                        </div>
                        {video3 && (
                            <iframe className='video-frame'
                            src='https://www.youtube.com/embed/gg4VjYrHG4k?autoplay=1&mute=1'
                            />
                        )}
                        </div>
                    <p>Lista de tarefas com funções de concluir, apagar e editar.</p>
                </div>
            </div>
        </div>
        </section> 
        <section id='serviços'>
        <div className="tela3">
            <div className="caixaTexto">
                <p className="servicos">Meus serviços</p>
                <b>Como posso ajudar o seu negócio</b>
            </div>
            <div className="caixas">
                <div className="ajuda">
                    <img src="imagens/Devices.png" className="imagens"/>
                    <p className="titulo"><strong>Websites e Aplicativos</strong></p>
                    <p>Desenvolvimento de interfaces</p>
                </div>
                <div className="ajuda">
                    <img src="imagens/HardDrives.png" className="imagens"/>
                    <p className="titulo"><strong>API e banco de dados</strong></p>
                    <p>Criação de serviços do sistema </p>
                </div>
                <div className="ajuda">
                    <img src="imagens/Infinity.png" className="imagens"/>
                    <p className="titulo"><strong>DevOps</strong></p>
                    <p>Gestão e infraestrutura da aplicação</p>
                </div>
            </div>
        </div>
      </section>
        <section id='contato'>
        <div className="tela4">
            <div className="caixaTexto2">
                <b>Gostou do meu trabalho?</b>
                <p>Entre em contato ou acompanhe as minhas redes sociais!</p>
            </div>
            <a href="https://www.linkedin.com/in/p%C3%A2mela-%C3%A9velim">
                <motion.div variants={parent} initial="variantA" whileHover="variantB" className="icones">
                   <div className="redirecionamento">
                    <img src="imagens/LinkedinLogo.png" alt='Linkedin'/>
                    <img className="linkedin" src="imagens/ArrowUpRight.png" alt='Ícone de seta'/>
                    </div>
                </motion.div>
                </a>
            <a href="https://www.instagram.com/p.evelim_/">
                <motion.div variants={parent} initial="variantA" whileHover="variantB" className="icones">
                <div className="redirecionamento">
                    <img src="imagens/InstagramLogo.png" alt='Instagram'/>
                    <img className="instagram" src="imagens/ArrowUpRight.png" alt='Ícone de seta'/>
                    </div>
                </motion.div>
                </a>
            <a href="https://github.com/pamelaevelim">
                <motion.div variants={parent} initial="variantA" whileHover="variantB" className="icones">
                <div className="redirecionamento">
                    <img src="imagens/GithubLogo.png" alt='GitHub'/>
                    <img className="github" src="imagens/ArrowUpRight.png" alt='Ícone de seta'/>
                    </div>
                </motion.div>
            </a>
            <a href="mailto:pamelaevelim7@gmail.com">
                <motion.div variants={parent} initial="variantA" whileHover="variantB" className="icones">
                <div className="redirecionamento">
                    <img src="imagens/EnvelopeSimple.png" alt='E-mail'/>
                    <img className="github" src="imagens/ArrowUpRight.png" alt='Ícone de seta'/>
                    </div>
                </motion.div>
            </a>
    </div>
  </section>
  <section id='form'>
    <div className='tela5'>
    <h1><strong>Entre em contato</strong></h1>
    <motion.img className='seta'
            animate={{ y: [0, 10, 0]}}
            transition={{ duration: 1, repeat: Infinity}}
            src="imagens/CaretDoubleDown.png" alt='Seta para baixo'></motion.img>
      <form>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <label>E-mail:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" placeholder='Digite sua mensagem.' id='mensagem' value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
      <button onClick={handleEnvio}><strong>Enviar</strong></button>
      </form>
    </div>
  </section>
  </div>
  )
}
