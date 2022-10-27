import "./Nav.mod.css"

const Nav = () => {

    return (
        <nav className="nav">
            <ul>
                <li><a href={`/`}>Home</a></li>
                <li>
                    <a href={`/cursos`}>Cursos</a>
                </li>
                <li><a href={`/rankings`}>Rankings</a></li>
            </ul>

        </nav>
    );
}

export { Nav };