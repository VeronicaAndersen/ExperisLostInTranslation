const ProfileTranslateHistory = ({ translations }) => {

    const ProfileTranslateHistoryItem = ({ translation }) => {

        return <li> {translation}</li>
    }

    //Adds index to translations so that multiple translations of the same sentence will be able to show in history
    const translateList = translations.map(
        (translation, index) => <ProfileTranslateHistoryItem key={index + ' - ' + translation} translation={translation} />)

    return (
        <section>
            <h3>Translate History</h3>
            <ul>
                {translateList}
            </ul>
        </section>
    )
}

export default ProfileTranslateHistory;