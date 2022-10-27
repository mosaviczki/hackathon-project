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
        name: 'Curso de Programação',
        description: 'Curso de Programação',
        image: 'https://cdn-icons-png.flaticon.com/512/2172/2172943.png'
    } as CursoParams);

    const topics = [
        [
        
            {
                id: 1,
                name: 'Introdução',
                description: 'Introdução ao curso de Programação',
                video: <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/KxmRCc_Jris" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" style={{zIndex:5}} ></iframe>
            },
        ],[
            {
                id: 2,
                name: 'Variáveis',
                description: 'Variáveis no curso de Programação',
            },
            {
                id: 3,
                name: 'Funções',
                description: 'Funções no curso de Programação',
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