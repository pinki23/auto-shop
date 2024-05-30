import './login.css'
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [error, setError] = useState(''); 
    const [phone, setPhone] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7212/api/Login', {
                phone: phone,
                password: pass
            });
            console.log(response.data);
            navigate('/account?phone=' + phone, {replace: true });
        } catch (error) {
            setError("Неправильный логин или пароль");
        }
    }


  return (
    <div className="auth-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="phone">Номер телефона</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Ваш номер телефона" id="phone" name="phone" />

        <label htmlFor="password">Пароль</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Ваш пароль" id="password" name="password" />
        <button type="submit">Войти</button>
        <p>{error}</p>
    </form>
    </div>
   
  )
}

export default Login