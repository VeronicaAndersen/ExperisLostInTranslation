
import TranslationSquare from '../Components/Profile/TranslationSquare';
import withAuth from '../Hoc/withAuth';
import ProfileActions from '../Components/Profile/ProfileActions';

const Profile = () => {

    return (
        <>
            <div id='historySquare'>
                <TranslationSquare />
            </div>
            <ProfileActions />
            
        </>
    )
}

export default withAuth(Profile);