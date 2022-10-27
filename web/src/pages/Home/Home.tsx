import { useState } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/NavBar/Header/Header'
import { TextSection } from '../../components/TextSection/TextSection'
import "./Home.mod.css"

function App() {
  return (
    <div className="App">
      <Header />

      <TextSection imagePosition='right'
        text='Quando pensamos em programação, desenvolvimento de softwares e computação, um limbo na maioria da cabeça das pessoas é formado. Ideias de que é muito difícil, quase impossível ou mais absurdo ainda, “isso é para poucos, não consigo aprender ” vem à tona. Por isso, criamos o site GMG, que tem como seu objetivo ensinar programação e raciocínio analítico por meio de vídeos explicativos e didáticos, focando nos níveis básicos.'
        title='Quem Somos'
        child={<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/rENnFlQgQIs" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> }
      />
     <Footer />
    </div>
  )
}

export default App
