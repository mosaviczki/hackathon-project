import { Class } from "./Class";
import "./CourseModule.mod.css";

interface CourseModuleProps {
    titulo: string;
    topics: Topic[][];
    callback: (video: React.ReactNode) => void;
}


interface Topic {
    id: number;
    name: string;
    description: string;
    video?: React.ReactNode;
}

const CourseModule = ({ titulo, topics ,callback }: CourseModuleProps) => {
    return (
        <div className="mainModule">
            <div>
                <h3>{titulo}</h3>
                <div style={{ display: "block" }}>

                    {topics.map((topic) => {
                        {
                            return (
                                <div style={{display:'flex'}}>

                        {topic.map((t) => {
                            return <Class id={t.id} name={t.name} description={t.description} video={t.video} callback={(video)=>callback(video) } />
                        })}
                                </div>)
                        }
                    })}
                </div>
            </div>
        </div>

    )
}


export { CourseModule }