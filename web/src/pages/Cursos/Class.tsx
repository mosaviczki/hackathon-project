import { useState } from "react";

interface Topic {
    id: number;
    name: string;
    description: string;
    video?: React.ReactNode;
    callback: (video: React.ReactNode) => void;
}

const Class = ({ name, description,video ,callback}: Topic) => {
    return (
        <div className="topic" style={{
            display: "block", height: '5rem',
            width: '12rem', margin: '1rem', padding: '1rem', border: '1px solid black', borderRadius: '1rem'
        }} onClick={()=>callback(video)}>
                <h4>{name}</h4>
                <p>{description}</p>
        </div>
    )
}

export { Class }