import React, { useState } from 'react';
import loginImage from '../images/log_in.png'

function Login() {
    // Dummy user data for the dropdown user-list
    const users = [
        {id:1, name: 'Alexandros'},
        {id:2, name: 'Stavros'},
        {id:3, name: 'Lena'}
    ]

    const [selectedUser, setSelectedUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        console.log(`User: ${selectedUser} , Password: ${password}`)
    }

    return(
        <div className='Login'>
            <div className='login-container'>
                <h1>Employees Polls</h1>
                <img src={loginImage} alt='Login-Image'/>

                <div className='login-form'>
                    <h2>Log In</h2>
                    <div className='input-group'>
                        <select value={selectedUser} onChange={handleUserChange}>
                            <option value="">Select User</option>
                            {users.map((user) => (
                                <option key={user.id} value={user.name}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='input-group'>
                        <input
                        type = "password"
                        placeholder = "Enter your password"
                        value = {password}
                        onChange = {handlePasswordChange}
                        />
                    </div>
                    <button onClick={handleLogin} disabled={!selectedUser}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;