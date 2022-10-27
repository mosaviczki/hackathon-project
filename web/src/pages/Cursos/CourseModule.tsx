import "./CourseModule.mod.css";

interface CourseModuleProps {
    titulo: string;
    topics: Topic[];
}


interface Topic {
    id: number;
    name: string;
    description: string;
}

const CourseModule = ({ titulo, topics }: CourseModuleProps) => {
    return (
        <div className="mainModule">
            <div>
                <h3>{titulo}</h3>
                <div className="modules">
                    {topics.map((topic) => {
                        return <div className="module">
                            <h4>{topic.name}
                            </h4>
                            <p>{topic.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}


export { CourseModule }