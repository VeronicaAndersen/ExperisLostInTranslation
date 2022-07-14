import { NavLink } from "react-router-dom";
import {VscAccount} from 'react-icons/vsc'
import { useUser } from '../../context/UserContext';

const NavBar = () => {
    const { user } = useUser()

    return (
        <>
            <header className="header">
                <h1>Lost in Translation</h1>
                { user !== null && 
                    <div>
                        <NavLink id="translateLink"to="/translate"> Translate</NavLink>
                        <NavLink id="profileLink" to="/profile"><VscAccount/> Profile</NavLink>
                    </div>
                }
            </header>
        </>
    )
}
export default NavBar;