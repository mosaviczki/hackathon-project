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
        {
            id: 3,
            name: 'Java',
            description: 'Java é uma linguagem de programação e uma plataforma computacional lançada pela primeira vez pela Sun Microsystems em 1995. Existem muitas aplicações e sites que não funcionarão, a menos que você tenha o Java instalado e, em alguns casos, você precisa do Java para jogar jogos online.',
            image: 'https://www.java.com/pt_BR/images/brand/java_logo.png'
        },
        {
            id: 4,
            name: 'C#',
            description: 'C# é uma linguagem de programação multi-paradigma desenvolvida pela Microsoft como parte da plataforma .NET. C# é uma linguagem orientada a objetos, tipada e baseada em componentes, que suporta vários paradigmas de programação, incluindo programação estruturada, programação funcional e programação orientada a aspectos.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png'
        },
        {
            id: 5,
            name: 'C++',
            description: 'C++ é uma linguagem de programação compilada multi-paradigma. É considerada uma linguagem de médio nível, pois abstrai muitos detalhes do hardware, mas ainda permite o controle direto da memória. É uma linguagem compilada, portanto, é necessário um compilador para gerar o código executável.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png'
        },
        {
            id: 6,
            name: 'C',
            description: 'C é uma linguagem de programação de propósito geral, imperativa, estruturada, procedural, padronizada pela American National Standards Institute (ANSI). Foi a primeira linguagem de programação a ser implementada em uma máquina real, o que aconteceu em 1972 no DEC PDP-11.',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1200px-The_C_Programming_Language_logo.svg.png'
        },

    ]

    const frameworks = [
        {
            id: 1,
            name: 'Introdução à Programação',
            description: 'Aprenda a programar do zero, com a linguagem Python, e desenvolva suas habilidades de programação.',
            image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
        },
        {
            id: 2,
            name: 'Variáveis e Tipos de Dados',
            description: 'Aprenda a criar variáveis e a trabalhar com os principais tipos de dados em Python.',
            image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
        },
    ]

    return (
        <div className="App">
            <Header />
            <div style={{ height: "2vh" }}></div>
            <ProgrammingSection title="Cursos Básicos" components={frameworks} />
            <div style={{height:"10vh"}}></div>
            <ProgrammingSection title="Linguagens" components={linguagens} />
            <div style={{ height: "2vh" }}></div>

            <Footer />
        </div>
    )
}

export default Cursos