import { useState } from "react";
import ProgrammingSectionItem from "./ProgrammingItem";

interface Item {
    id: number;
    name: string;
    description: string;
    image: string;
}
interface ProgrammingSectionProps {
    title: string;
    components: Item[];
}

const ProgrammingSection = ({ title, components }: ProgrammingSectionProps) => {
    const [selected, setSelected] = useState(0)

    const style = {
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-around',
        'align-items': 'center',
        'width': '100%',
        'height': '100%',
    }

    return (
        <section>
            <h2 className='sub-title'>{title}</h2>
            <div style={style}>
                {components.map((component) => {
                    return <div onClick={() => selected == component.id ? setSelected(0) :setSelected(component.id)}>
                        <ProgrammingSectionItem id={ component.id } title={component.name} description={component.description} image={component.image} showDescription={selected==component.id} />
                    </div>
                })}
            </div>
        </section>
    )
}

export default ProgrammingSection