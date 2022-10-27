import "./Nav.mod.css"

const Nav = () => {
    
    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                    <a href="#">Cursos</a>
                </li>
                <li><a href="#">Rankings</a></li>
            </ul>

        </nav>
    );
}

export {Nav};