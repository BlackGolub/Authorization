import React, { useState }from 'react';
import styles from './InputForm.module.css';

const InputForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const toSend = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
          });
          
          const serverResponse = { email, password }

          if (serverResponse) {
            console.log('Запрос отправлен - ', serverResponse);
          } else {
            console.error('Ошибка:', response.statusText);
          }
        } catch (error) {
          console.error('Ошибка:', error);
        }
    };

    return(
        <div className={styles.block}>
            <h1>User Login</h1>
            <form className={styles.form} onSubmit={toSend}>
                <div className={styles.mail}>
                    <p>Email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.password}>
                    <p>Password</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>Confirm</button>
            </form>
        </div>
    )
}

export default InputForm