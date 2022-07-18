import { useState } from 'react'
import { VscArrowRight } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import { addTranslation } from '../Api/Translation'
import { BsKeyboard } from 'react-icons/bs'

//Config for translation (ie. max amount of characters allowed in one translation)
const translationConfig = {
    maxLength: 40,
}

const TranslationSearch = () => {
    const { register, handleSubmit } = useForm()
    const [imageList, setImageList] = useState([])
    const [errorMessage, setErrorMessage] = useState([])

    const Translate = ({ string }) => {

        let imageArray = []

        const errorMessage = (message) => {
            if (message === 'regexFail') {
                setErrorMessage(<span className='validateLogin'>*Translation denied. Only letters ranging a-z are currently supported.</span>)
            }
            //Add more error messages here if needed
        }
        //regex only allowing letters and space
        if (!/^[a-zA-Z ]*$/g.test(string)) {
            return errorMessage('regexFail')
        }


        addTranslation(string)
        string = string.toLowerCase()

        //Adds every characters image to the array of images
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== " ") {
                imageArray.push(<img className='sign-img' src={'signs/' + string[i] + '.png'} alt={string[i]} key={i} />)
            }
        }
        setImageList(imageArray)
    }

    return (
        <>
            <form onSubmit={handleSubmit(Translate)}>
                <fieldset>
                    <BsKeyboard className='keyboard' />
                    <input
                        placeholder='Translate something'
                        type="text" {...register("string", translationConfig)} />
                    <button type='submit'><VscArrowRight /></button>
                    {errorMessage}
                </fieldset>

                <div className="TranslationSquare">

                    <div>{imageList}</div>

                    <div id="translation">Translation</div>
                </div>
            </form>
        </>
    )
}

export default TranslationSearch