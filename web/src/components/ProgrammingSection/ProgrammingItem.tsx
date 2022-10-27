import "./ProgrammingItem.mod.css"
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

interface ProgrammingSectionItemProps {
    id:number;
    title: string;
    description: string;
    image: string;
    showDescription: boolean;
}

const ProgrammingSectionItem = ({ id,title, description, image, showDescription }: ProgrammingSectionItemProps) => { 
    const navigate = useNavigate();
    const onClick = useCallback(() => navigate('/cursos/'+id, { replace: true }), [navigate]); 
    return (
        <div className='programming-item'>
            <img className="imgIcon" src={image} alt={title} />
            <h3>{title}</h3> 
            {showDescription ?
                <>
                    <p className="description">{description}</p>
                    <div className="goToButton" onClick={() => onClick()}>Ir para curso</div>
                </>
                : <></>}
        </div>
    )
}


export default ProgrammingSectionItem;