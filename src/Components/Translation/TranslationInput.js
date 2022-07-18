import { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import { addTranslation } from '../Api/Translation';

const usernameConfig = {
    maxLength: 40,
};

const TranslationSearch = () => {
    const { register, handleSubmit } = useForm();
    const [imageList, setImageList] = useState([]);
    const onSubmit = ({ string }) => {
        Translate(string);
    }

    const Translate = (string) => {

        let imageArray = [];

        if (!/^[a-zA-Z ]*$/g.test(string)) {
            alert("Translation denied. Only letters ranging a-z are currently supported.")
            return;
        }

        addTranslation(string);
        string = string.toLowerCase();

        for (let i = 0; i < string.length; i++) {
            if (string[i] !== " ") {
                imageArray.push(<img className="sign-img" src={"signs/" + string[i] + ".png"} alt={string[i]} key={i} />);
            }
        }
        setImageList(imageArray);
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <input
                    placeholder='Translate something'
                    type="text" {...register("string", usernameConfig)} />

                <button type='submit'><VscArrowRight /></button>
                <div className="TranslationSquare">

                    <div>{imageList}</div>

                    <div id="translation">Translation</div>
                </div>

            </fieldset>
        </form>
    </>)
}

export default TranslationSearch;