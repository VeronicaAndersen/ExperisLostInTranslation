import { useForm } from 'react-hook-form'
import { VscArrowRight } from "react-icons/vsc";

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
    }

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === "required") {
            return <span>Username is required</span>
        }

        if (errors.username.type === "minLength") {
            return <span>Username is too short. Requires a minimum of three characters.</span>
        }
    })()

    return (
        <>
            <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input type="text" placeholder="Username" {...register("username", usernameConfig)} />
                    <button type="submit"><VscArrowRight /></button>
                    {errorMessage}
                </fieldset>
            </form>
        </>
    )

}
export default LoginForm;