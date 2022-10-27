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
}



const Curso = () => {

    const { id } = useParams();
    const [curso, setCurso] = useState({
        name: 'Curso de Python',
        description: 'Curso de Python',
        image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM.png'
    } as CursoParams);

    const topics = [
        {
            id: 1,
            name: 'Introdução',
            description: 'Introdução ao curso de Python'
        },
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
    ] as Topic[];

    return (
        <div>
            <Header />
            <h1>{curso.name}</h1>
            <CourseModule titulo='aDSAGBS' topics={ topics } />
            <Footer/>
        </div>
    );
}

export { Curso }