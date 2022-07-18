import { BiLogOut } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { storageDelete, StorageSave } from '../../Utils/Storage';
import { STORAGE_KEY_USER } from '../../const/StorageKeys';
import { useUser } from '../../context/UserContext';
import { translationClearHistory } from '../Api/Translation';

const ProfileActions = () => {

    const { user, setUser } = useUser();

    const handleLogout = () => {
        if (window.confirm('Are you sure?')) {
            // Send event to parent.
            storageDelete(STORAGE_KEY_USER);
            setUser(null);
        }
    }

    const handleClearHistory = async () => {

        if (!window.confirm('Are you sure? \nThis can´t be undone!')) {
            return
        }
        

        const [clearError] = await translationClearHistory(user.id);

        if (clearError !== null) {
            //Do something about this
            return
        }
        const updatedUser = {
            ...user,
            translations: []
        }
        StorageSave(STORAGE_KEY_USER, updatedUser);
        setUser(updatedUser);
    }

    return (
        <span>
            <button id="logoutBtn" onClick={handleLogout}>Log out <BiLogOut /></button>
            <button id="deleteHistoryBtn" onClick={handleClearHistory}>Clear history <AiOutlineDelete /></button>
        </span>

    )
}

export default ProfileActions;