import { NavLink } from "react-router-dom";
import logo from "../ApiBRLogo.png";
import classnames from "classnames";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="https://apibr.com/ui/">
                <img src={logo} alt="API BR Logo" style={{ width: "48px", marginLeft: "10px"}} />
            </a>
            <div>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className={({isActive}) => classnames('nav-link', { active: isActive })} to="/">Vagas</NavLink>
                    </li>        
                    <li className="nav-item">
                        <NavLink className={({isActive}) => classnames('nav-link', { active: isActive })} to="/repositorios">Repositórios</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive}) => classnames('nav-link', { active: isActive })} to="/nova-vaga">Publicar uma vaga</NavLink>
                    </li>
                </ul>                
            </div>
        </nav>
    )
}

export default NavBar;