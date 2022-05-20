import React from 'react';
import '../HackList/styles.css'
import { useAuth0 } from '@auth0/auth0-react';


const LogoutBtn = () => {
    const { logout } = useAuth0();
    return ( 
        <>
            <button className="menuItemBtn" onClick={() => logout({ returnTo: 'http://localhost:3000/hacklist' })}>
               Logout
            </button>
        </>
    );
}

export default LogoutBtn;