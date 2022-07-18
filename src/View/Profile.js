
import TranslationSquare from '../Components/Profile/TranslationSquare';
import withAuth from '../Hoc/withAuth';
import ProfileActions from '../Components/Profile/ProfileActions';
import { useUser } from '../context/UserContext';
import { useEffect } from 'react';
import { userById } from '../Components/Api/user';

const Profile = () => {

    const { user, setUser } = useUser();

    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await userById(user.id);
            if (error === null) {
                setUser(latestUser);
            }
        }
        findUser();
    },[setUser, user.id])

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