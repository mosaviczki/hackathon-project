import { useState } from "react";

interface Topic {
    id: number;
    name: string;
    description: string;
    video?: React.ReactNode;
}

const Class = ({ name, description,video }: Topic) => {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <div className="topic" style={{
            display: "block", height: '5rem',
            width: '12rem', margin: '1rem', padding: '1rem', border: '1px solid black', borderRadius: '1rem'
        }} onClick={()=>setShowVideo(!showVideo)}>
                <h4>{name}</h4>
                <p>{description}</p>
            {video && showVideo ? video : <></>}
        </div>
    )
}

export { Class }