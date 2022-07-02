import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  const dispatch = useDispatch();

  //option === null 로그인이든 아니든 접속가능
  //option === true 로그인한 유저만 접속가능
  //option === false 로그인시 접속불가능

  function AuthenticationCheck({ navi }) {
    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res.data);
        //로그인 안한 상태
        if (!res.payload.isAuth) {
          if (option) {
            alert('로그인한 상태에서만 접속이 가능합니다.');
            return navi('/');
          }
        } else {
          //로그인한 상태
          if (adminRoute && !res.payload.isAdmin) {
            alert('관리자만 접속이 가능합니다.');
            return navi('/');
          } else {
            //로그인한 유저가 회원가입 및 로그인 페이지 가려할때
            if (option === false) {
              alert('로그인한 유저는 접속이 불가능합니다.');
              return navi('/');
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
