import React, { createContext, useContext, useState, useEffect, Children } from 'react';
import { Navigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const loginContext = createContext();


export const LoginProvider = ({children}) => {

    const navigate = useNavigate();
    const [isLogin, setLogin] = useState(false);

    const [loginData, setLoginData] = useState({
        accessToken: '',
        email: '',
        firstName: '',
        id: 0,
        image: '',
        lastName: '',
        username: '',
        refreshtoken: ''
    });
    useEffect(() => {
        if (localStorage.getItem('loginData')) {
            setLogin(true);
        }
    }, [])

    useEffect(() => {
        if (loginData.accessToken.length > 0) {
            localStorage.setItem('loginData', JSON.stringify(loginData));
        }
        console.log(loginData, 'loginData', new Date().getTime());
    }, [loginData]);



    function login(userName, password) {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: userName,
              password: password,
              expiresInMins: 30, // optional, defaults to 60
            }),
          }).then(res => {
            res.json().then((data) => {
                console.log(data);
                if (data.accessToken) {
                    setLogin(true);
                    setLoginData((prevFormData) => {
                        return {...prevFormData, ...data};
                    });
                }

                navigate('/dashboard');
            })
          }).catch(err => {
            console.log(err);
          });
    }



    return <loginContext.Provider value={{isLogin, loginData, login}} >{children}</loginContext.Provider>

}