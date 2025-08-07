import { loginContext } from "../context/loginContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Userlogin({}) {
    const {isLogin, loginData, login} = useContext(loginContext);
    const navigate = useNavigate();

    const [ formData, setFormData] = useState({
        'name': '',
        'password': '',
    })

    useEffect(() => {
        if (localStorage.getItem('loginData')) {
            navigate('/dashboard');
        }
    }, [])

    const handleSubmit = (event) =>{
        event.preventDefault(); //
        console.log(formData);
        login(formData.name, formData.password);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    return (
        <div>
                  <style>{`
        form div {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
          width: 400px;
        }
          input {
            border: 1px solid black;
            border-radius: 12px;
          }
            button {
                        border: 1px solid black;
            border-radius: 12px;
            background: black;
            color: white;
            }
      `}</style>
            Welcome to user login
            <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                </div>
                <div>
                <label htmlFor="password">password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
                </div>
                <div>
                <button type="submit">Submit</button>
                </div>
             </form>
            </div>
        </div>
    )
}