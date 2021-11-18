import React, { useState } from 'react';
/* eslint-disable react/prop-types */
export const FormLogin = ({handleSubmit}) => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleEmail = e => setEmail(e.target.value);
const handlePassword = e => setPassword(e.target.value);

return (
<form >
    <h1>INICIAR SESIÓN</h1>
    <div className="input-email">
        <input type="email" placeholder='Ingresa tu e-mail' onChange={handleEmail} required />
    </div>
    <div className="input-contraseña">
        <input type='password' placeholder='Ingresa Contraseña' onChange={handlePassword} required />
    </div>
    <input type='submit' data-testid='submit-test' className='btn-login' value='Log In' 
    onClick={(e) => {
      e.preventDefault();
      handleSubmit(email, password);
    }}/>
</form>
)
}