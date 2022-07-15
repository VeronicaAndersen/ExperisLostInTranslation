import ProfileTranslateHistoryItem from "./ProfileTranslateHistoryItem";

const ProfileTranslateHistory = ({ translations }) => {

    const translateList = translations.map(
        (translation, index) => <ProfileTranslateHistoryItem key={ index + ' - ' + translation } translation={ translation }/>);

    return (
        <section>
            <h3>Translate History</h3>
            <ul>
                { translateList }
            </ul>
        </section>
    )
}

export default ProfileTranslateHistory;