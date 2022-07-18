import { useUser } from '../../context/UserContext'
import ProfileTranslateHistory from './ProfileTranslateHistory'

const TranslationSquare = () => {

    const { user } = useUser()

    return (
        <>
            <div className="TranslationSquare">
                <ProfileTranslateHistory translations={user.translations} />
            </div>
        </>
    )

}
export default TranslationSquare;