import { BiLogOut } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';

const ProfileActions = ({logout}) => {

    const handleLogout = () => {
        if (window.confirm('Are you sure?')) {
            // Send evemt to parent.
            logout();
        }
    }

    return (
        <span>
            <button id="logoutBtn" onClick={handleLogout}>Log out <BiLogOut /></button>
            <button id="deleteHistoryBtn">Delete history <AiOutlineDelete /></button>
        </span>

    )
}

export default ProfileActions;