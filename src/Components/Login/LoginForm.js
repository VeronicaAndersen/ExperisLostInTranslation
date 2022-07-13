import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { VscArrowRight } from "react-icons/vsc";
import { LoginUser } from '../Api/user';

const usernameConfig = {
    required: true,
    minLength: 3,
};
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const [ loading, setLoading ] = useState(false);

    const onSubmit = async ({username}) => {
        setLoading(true);
        const [error, user] = await LoginUser(username);
        console.log('Error: ', error);
        console.log('User: ', user);
        setLoading(false);
    }
    console.log(errors);

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

                    <button type='submit' disabled={ loading }><VscArrowRight /></button>
                </fieldset>
                { loading && <p>Logging in...</p>}
                { errorMessage }
            </form>
        </>
    )

}
export default LoginForm;