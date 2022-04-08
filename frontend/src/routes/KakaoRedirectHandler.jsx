import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import apiInstance from '../utils/apiInstance';
import { getToken, getUserInfo } from '../api/user';
import useStore from '../stores/user';
import walkingKkubook from '../assets/walking_kkubook.png';

const ImgDiv = styled.div`
  ${tw`flex flex-col items-center justify-center`}
  height: 100vh;

  img {
    width: 150px;
    height: auto;
    animation: bounce 1s infinite;

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }

  h1 {
    font-size: 20px;
    margin-top: 1rem;
  }
`;

function KakaoRedirectHandler() {
  // 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const setUserInfo = useStore(state => state.setUserInfo);
  const navigate = useNavigate();

  React.useEffect(() => {
    getToken(
      {
        grant_type: 'authorization_code',
        client_id: process.env.REACT_APP_REST_API_KEY,
        redirect_uri: 'http://j6b204.p.ssafy.io/oauth/callback/kakao',
        code,
      },
      response => {
        const accessToken = response.data.access_token;
        getUserInfo(accessToken, res => {
          const {
            user,
            nickname,
            is_kkubook,
            kkubook_complete,
            level,
            kkubook_days,
            created_at,
            access_token,
            is_new,
          } = res.data;
          sessionStorage.setItem('Authorization', access_token);
          apiInstance.defaults.headers.common.Authorization = `Bearer ${access_token}`;
          setUserInfo({
            userId: user,
            kkubookComplete: kkubook_complete,
            isKkubook: is_kkubook,
            kkubookDays: kkubook_days,
            createdAt: created_at.split('T')[0],
            isNew: is_new,
            nickname,
            level,
          });
          if (is_new === true) {
            navigate('/survey');
          } else {
            navigate('/');
          }
        });
      },
      () => {
        console.log('login failed');
      },
    );
  }, []);

  return (
    <ImgDiv>
      <img src={walkingKkubook} alt="loading" />
      <h1>로그인하는 중입니다.</h1>
    </ImgDiv>
  );
}

export default KakaoRedirectHandler;
