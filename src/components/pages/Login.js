import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

export default function Login() {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_url = location.state?.from || '/';
    
  const handleRedirect = () =>{
        signInUsingGoogle()
        .then( result =>{
            history.push(redirect_url)
        })
    }

    return (
        <div className='container text-xl-center my-4'>
            <h1>Please Login</h1>
            <Button onClick={handleRedirect} variant="danger" size="lg">Login Using Google</Button>
        </div>
    )
}
