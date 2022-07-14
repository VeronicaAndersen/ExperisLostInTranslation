import { VscArrowRight } from 'react-icons/vsc'

const TranslationSearch = () => {
    return (<>
        <fieldset>
            <input
                placeholder='Translate something'
                type="text" />

            <button type='submit'><VscArrowRight /></button>

        </fieldset>
    </>)

}
export default TranslationSearch;