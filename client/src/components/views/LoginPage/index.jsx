import axios, { Axios } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = { email: Email, password: Password };
    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navi('/');
      } else {
        alert('오류');
      }
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" style={{ marginTop: '1rem' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
