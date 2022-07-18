import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom'

// Checks if an user is logged in otherwise navigates back to login page. 
const withAuth = Component => props => {
    const { user } = useUser()
    
    if (user !== null) {
        return <Component { ...props }/>
    }else{
        return <Navigate to='/' />
    }
}
export default withAuth;