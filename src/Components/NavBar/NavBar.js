import { NavLink } from "react-router-dom";
import {VscAccount} from 'react-icons/vsc'

const NavBar = () => {
    return (
        <>
            <header className="header">
                <h1>Lost in Translation</h1>
                <NavLink id="profileLink" to="/profile"><VscAccount/> Profile</NavLink>
            </header>
        </>
    )
}
export default NavBar;