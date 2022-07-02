import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LadingPage = () => {
  const navi = useNavigate();
  const onClickHandler = () => {
    axios.get('/api/users/logout').then((res) => {
      if (res.data.success) {
        alert('로그아웃 완료');
        navi('/login');
      } else {
        alert('로그아웃 실패');
      }
    });
  };

  useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res.data));
  });

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '25rem',
        }}
      >
        <h2>시작 페이지</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button onClick={onClickHandler}>로그아웃</button>
      </div>
    </div>
  );
};

export default LadingPage;
