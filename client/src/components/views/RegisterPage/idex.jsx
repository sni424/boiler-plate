import axios, { Axios } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      alert('비밀번호가 상이합니다.');
    }
    let body = { email: Email, name: Name, password: Password, confirmpassword: ConfirmPassword };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        alert('회원가입 완료');
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
        <label>Name</label>
        <input
          type="text"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="Password"
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button type="submit" style={{ marginTop: '1rem' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
