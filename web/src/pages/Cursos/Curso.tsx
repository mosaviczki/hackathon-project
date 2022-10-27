import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/NavBar/Header/Header';
import { CourseModule } from './CourseModule';

interface CursoParams {
    name: string;
    description: string;
    image: string
}


interface Topic {
    id: number;
    name: string;
    description: string;
    video?: React.ReactNode;
}



const Curso = () => {

    const { id } = useParams();
    const [curso, setCurso] = useState({
        name: 'Curso de Python',
        description: 'Curso de Python',
        image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
    } as CursoParams);

    const topics = [
        [
        
            {
                id: 1,
                name: 'Introdução',
                description: 'Introdução ao curso de Python',
                video: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KxmRCc_Jris" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{zIndex:5}} ></iframe>
            },
        ],[
            {
                id: 2,
                name: 'Variáveis',
                description: 'Variáveis em Python'
            },
            {
                id: 3,
                name: 'Funções',
                description: 'Funções em Python'
            }
    ] 
    ]

    return (
        <div>
            <Header />
            <h1>{curso.name}</h1>
            <CourseModule titulo='Introdução à linguagem' topics={ topics } />
            <Footer/>
        </div>
    );
}

export { Curso }