import DeleteHistoryBtn from '../Components/Profile/DeleteHistoryBtn';
import LogoutBtn from '../Components/Profile/LogOutBtn';
import TranslationSquare from '../Components/Profile/TranslationSquare';
import withAuth from '../Hoc/withAuth';
import ProfileActions from '../Components/Profile/ProfileActions';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import ProfileTranslateHistory from '../Components/Profile/ProfileTranslateHistory';
import { useUser } from '../context/UserContext';


const Profile = () => {

    const { user } = useUser()

    return (
        <>
            <LogoutBtn />
            <div id='historySquare'>
                <TranslationSquare />
                <DeleteHistoryBtn />
            </div>
        
            <ProfileHeader username={ user.username }/>
            <ProfileActions />
            <ProfileTranslateHistory translations={ user.translations }/>
        </>
    )
}

export default withAuth(Profile);