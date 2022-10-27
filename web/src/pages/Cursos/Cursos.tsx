import { useState } from "react"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/NavBar/Header/Header"
import ProgrammingSection from "../../components/ProgrammingSection/ProgrammingSection"


const Cursos = () => {
    const linguagens = [
        {
            id: 1,
            name: 'Python',
            description: 'Python é uma linguagem de programação de alto nível, interpretada, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte. Foi lançada por Guido van Rossum em 1991.',
            image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
        },
        {
            id: 2,
            name: 'JavaScript',
            description: 'JavaScript, frequentemente abreviado como JS, é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multi-paradigma (protótipo, orientada a objeto, imperativa e, funcional).',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
        },
    ]

    const frameworks = [
        {
            id: 1,
            name: 'Django',
            description: 'Django é um framework web de código aberto, escrito em Python, que segue o padrão de projeto modelo-template-view (MTV). É mantido pela Django Software Foundation (DSF), uma organização sem fins lucrativos fundada por Adrian Holovaty e Simon Willison.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1200px-Django_logo.svg.png'
        },
        {
            id: 2,
            name: 'ReactJS',
            description: 'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
    ]

    return (
        <div className="App">
            <Header />
            <ProgrammingSection title="Linguagens" components={linguagens} />
            <div style={{height:"10vh"}}></div>
            <ProgrammingSection title="Frameworks" components={frameworks} />

            <Footer />
        </div>
    )
}

export default Cursos