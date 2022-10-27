import "./ProgrammingItem.mod.css"

interface ProgrammingSectionItemProps {
    title: string;
    description: string;
    image: string;
    showDescription: boolean;
}

const ProgrammingSectionItem = ({ title, description, image, showDescription }: ProgrammingSectionItemProps) => { 
    return (
        <div className='programming-item'>
            <img className="imgIcon" src={image} alt={title} />
            <h3>{title}</h3> 
            {showDescription ?
                <p className="description">{description}</p>
                : <></>}
        </div>
    )
}


export default ProgrammingSectionItem;