import { useState } from 'react';
import { VscArrowRight } from 'react-icons/vsc'
import { useForm } from 'react-hook-form'

const usernameConfig = {
    maxLength: 40,
};

const TranslationSearch = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();                                                

    const [imageList, setImageList] = useState([]);

    const onSubmit = ({ string }) => {Translate(string);}                                               

    const Translate = (string) => {

        let imageArray = [];
        string = string.toLowerCase();

        if (!/^[a-z ]*$/g.test(string)){
            alert("Translation denied. Only letters ranging a-z are currently supported.")
            return;
        }

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