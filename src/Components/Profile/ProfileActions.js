import { BiLogOut } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { StorageSave } from '../../Utils/Storage';
import { STORAGE_KEY_USER } from '../../const/StorageKeys';
import { useUser } from '../../context/UserContext';

const ProfileActions = () => {

    const { setUser } = useUser();

    const handleLogout = () => {
        if (window.confirm('Are you sure?')) {
            // Send event to parent.
            StorageSave(STORAGE_KEY_USER, null);
            setUser(null);
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