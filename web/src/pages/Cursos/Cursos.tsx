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

    return (
        <div className="App">
            <Header />
            <ProgrammingSection title="Linguagens" components={linguagens} />

            <Footer />
        </div>
    )
}

export default Cursos