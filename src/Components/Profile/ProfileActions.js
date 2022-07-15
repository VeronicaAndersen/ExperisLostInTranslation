import { BiLogOut } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { storageDelete } from '../../Utils/Storage';
import { STORAGE_KEY_USER } from '../../const/StorageKeys';
import { useUser } from '../../context/UserContext';

const ProfileActions = () => {

    const { setUser } = useUser();

    const handleLogout = () => {
        if (window.confirm('Are you sure?')) {
            // Send event to parent.
            storageDelete(STORAGE_KEY_USER);
            setUser(null);
        }
    }

    const handleDelete = () => {
        if (window.confirm('Do you want to clear your history?')) {
            
        }
    }

    return (
        <span>
            <button id="logoutBtn" onClick={handleLogout}>Log out <BiLogOut /></button>
            <button id="deleteHistoryBtn">Clear history <AiOutlineDelete /></button>
        </span>

    )
}

export default ProfileActions;