import TranslationSearch from '../Components/Translation/TranslationInput';
import withAuth from '../Hoc/withAuth';

const Translation = () => {

    return (
        <>
            <TranslationSearch />
        </>
    )
}
//TranslationSquare

export default withAuth(Translation);