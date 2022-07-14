import DeleteHistoryBtn from '../Components/Profile/DeleteHistoryBtn';
import LogoutBtn from '../Components/Profile/LogOutBtn';
import TranslationSquare from '../Components/Profile/TranslationSquare';


const Profile = () => {

    return (
        <>
            <LogoutBtn />
            <div id='historySquare'>
                <TranslationSquare />
                <DeleteHistoryBtn />
            </div>
        </>
    )
}

export default Profile;