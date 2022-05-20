import React from 'react';
import '../HackList/styles.css'
import { useAuth0 } from '@auth0/auth0-react';


const LoginBtn = () => {
    const { loginWithRedirect } = useAuth0();
    return ( 
        <>
            <button className="menuItemBtn" onClick={() => loginWithRedirect()}>
                Sing Up/Log In
            </button>
        </>
    );
}

export default LoginBtn;