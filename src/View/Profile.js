import DeleteHistoryBtn from '../Components/Profile/DeleteHistoryBtn';
import LogoutBtn from '../Components/Profile/LogOutBtn';
import TranslationSquare from '../Components/Profile/TranslationSquare';
import withAuth from '../Hoc/withAuth';


const Profile = () => {

    return (
        <>
            <h1>Hello </h1>
            <LogoutBtn />
            <div id='historySquare'>
                <TranslationSquare />
                <DeleteHistoryBtn />
            </div>
        </>
    )
}

export default withAuth(Profile);