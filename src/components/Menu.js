import { NavLink } from 'react-router-dom';

const Menu = () => {
    //Ce composant est notre barre menu
    return ( 
        <div className="menu">
            <ul>
                <li><NavLink to="/" className={ ( {isActive} ) => (isActive ? "activeLink" : undefined) }>Accueil</NavLink></li>
                <li><NavLink to="/add" className={ ( {isActive} ) => (isActive ? "activeLink" : undefined) }>Ajouter un techno</NavLink></li>
                <li><NavLink to="/list" className={ ( {isActive} ) => (isActive ? "activeLink" : undefined) }>Liste</NavLink></li>
            </ul>
        </div>
     );
}
 
export default Menu;