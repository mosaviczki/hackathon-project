import LogoUTFPR from '../../assets/utfpr.png';
import Logo from '../../assets/logo.png';

import "./Footer.mod.css"

const Footer = () => {
    return (
        <footer>
            <div className="images">
                <img src={LogoUTFPR} className="footer-logo" alt="" />
                <img src={Logo} className="footer-subLogo" alt="" />
            </div>

            <div className="rights">
                <p>© 2022 - Todos os direitos reservados</p>
            </div>
            <div className="contact">
                <h2>Contatos</h2>
            </div>
        </footer>
    )
}

export {Footer}