import { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'
import { addTranslation } from '../Api/Translation';
import { useUser } from '../../context/UserContext';

const usernameConfig = {
    maxLength: 40,
};

const TranslationSearch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm(); 
    const {user} = useUser();                                               

    const [imageList, setImageList] = useState([]);

    const onSubmit = ({ string }) => {
        Translate(string); 
    }   
    
    const handleTranslationSave = async (notes) => {

        const [error, result] = await addTranslation(notes)
    }

    const Translate = (string) => {

        let imageArray = [];

        if (!/^[a-zA-Z ]*$/g.test(string)){
            alert("Translation denied. Only letters ranging a-z are currently supported.")
            return;
        }

        handleTranslationSave(string);
        string = string.toLowerCase();

        for (let i = 0; i < string.length; i++) {
            if(string[i] !== " ") {
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