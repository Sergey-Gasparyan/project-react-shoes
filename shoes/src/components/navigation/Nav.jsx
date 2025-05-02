import { Link ,NavLink} from 'react-router-dom';
import "./Nav.css"

export function Nav () {
    return <nav  >
        <Link className="sals--name"  to="/"> Sals </Link> 
        <ul>
        <li> <NavLink style={{color:'white'}} to="/about"> About </NavLink> </li>
        <li> <NavLink style={{color:'white'}} to="/contact"> Contact</NavLink>  </li>
        <li> <NavLink style={{color:"white"}} to="/credit" > Credit</NavLink> </li>
        </ul>
    </nav>
}