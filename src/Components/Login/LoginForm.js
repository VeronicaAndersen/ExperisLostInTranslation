import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { VscArrowRight } from "react-icons/vsc";
import { LoginUser } from '../Api/user';
import { BiLoaderCircle } from 'react-icons/bi'
import { StorageSave } from '../../Utils/Storage';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const usernameConfig = {
    required: true,
    minLength: 3,
};
const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {user, setUser } = useUser();
    const navigate = useNavigate();

    //Local state
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    //Side effects
    useEffect(() => {
        if (user !== null){
            navigate("/translation");
        }
    }, [user, navigate] ) //Empty dependencies, will only run once



    //Event handlers
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [error, userResponse] = await LoginUser(username);
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            StorageSave("translate-user", userResponse)
            setUser(userResponse)
        }
        setLoading(false);

    }

    
    //Render functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span className='validateLogin'>*Username is required</span>
        }
        if (errors.username.type === 'minLength') {
            return <span className='validateLogin'>*Username is too short [min. 3]</span>
        }
    })()

    return (
        <>


            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <input
                        placeholder='What´s your name?'
                        type="text" {...register("username", usernameConfig)} />

                    <button type='submit' disabled={loading}><VscArrowRight /></button>
                    {loading && <h2>Logging in <BiLoaderCircle /> </h2>}
                    {errorMessage}
                    {apiError && <p>{apiError}</p>}
                </fieldset>
            </form>
        </>
    )

}
export default LoginForm;