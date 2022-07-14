import DeleteHistoryBtn from '../Components/Profile/DeleteHistoryBtn';
import LogoutBtn from '../Components/Profile/LogOutBtn';
import TranslationSquare from '../Components/Profile/TranslationSquare';
import withAuth from '../Hoc/withAuth';
import ProfileActions from '../Components/Profile/ProfileActions';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import ProfileTranslateHistory from '../Components/Profile/ProfileTranslateHistory';
import { useUser } from '../context/UserContext';
import { StorageSave } from '../Utils/Storage';
import { STORAGE_KEY_USER } from '../const/StorageKeys';


const Profile = () => {

    const { user, setUser } = useUser();

    const logout = () => {
        StorageSave(STORAGE_KEY_USER, null);
        setUser(null);
    }

    return (
        <>
            <LogoutBtn />
            <div id='historySquare'>
                <TranslationSquare />
                <DeleteHistoryBtn />
            </div>
        
            <ProfileHeader username={ user.username }/>
            <ProfileActions logout={ logout } />
            <ProfileTranslateHistory translations={ user.translations }/>
        </>
    )
}

export default withAuth(Profile);