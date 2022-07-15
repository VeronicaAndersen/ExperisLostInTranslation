import { NavLink } from "react-router-dom";
import {VscAccount} from 'react-icons/vsc'
import { useUser } from '../../context/UserContext';


const NavBar = ( {username} ) => {
    const { user } = useUser()

    return (
        <>
            <header className="header">
                <h1>Lost in Translation</h1>
                { user !== null && 
                    <div>
                        <NavLink id="translateLink"to="/translation"> Translate</NavLink>
                        <NavLink id="profileLink" to="/profile"><VscAccount/> {user.username} </NavLink>
                    </div>
                }
            </header>
        </>
    )
}
export default NavBar;