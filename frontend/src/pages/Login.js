import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

import api from '../services/api';
import logo from '../assets/logo.svg';

function Login ({ history }) {
    const [username, setUserName] = useState('');
    async function handleSubmit (e) {
        e.preventDefault();
        const response = await api.post('/devs', { username });
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Seu usuário no GitHub"
                    value={username}
                    onChange={e => setUserName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

Login.propTypes = {
    history: PropTypes.array
};

export default Login;
