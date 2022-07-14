
import TranslationSquare from '../Components/Profile/TranslationSquare';
import withAuth from '../Hoc/withAuth';
import ProfileActions from '../Components/Profile/ProfileActions';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import ProfileTranslateHistory from '../Components/Profile/ProfileTranslateHistory';
import { useUser } from '../context/UserContext';

const Profile = () => {

    const { user } = useUser();

    return (
        <>
            <div id='historySquare'>
                <TranslationSquare />
            </div>
        
            <ProfileHeader username={ user.username }/>
            <ProfileActions />
            <ProfileTranslateHistory translations={ user.translations }/>
        </>
    )
}

export default withAuth(Profile);