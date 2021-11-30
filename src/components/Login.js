import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FormLogin } from '../components/FormLogin';
import logo from '../assets/logo.png';
import loginAside from '../assets/login-aside.jpg';

export const Login = () => {

  const { login } = useAuth();
	const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password);
      history.push('/');
    } catch (error) {
      setError('C A M P O S  --  I N V A L I D O S');
      setTimeout(() => setError(''), 1500);
    }
  }

  return (
    <main className='login'>
        <section className='container'>
            <div className="div-form">
              <img src={logo} alt='logo' className="logo"/>
              {error && <p className='error' >{ error }</p>}
              <FormLogin handleSubmit={handleSubmit} />
            </div>
            <div className='div-hamburger'>
                <img src={loginAside} alt='logo' className="img-aside"/>
            </div>
            </section>
    </main>
  )
}