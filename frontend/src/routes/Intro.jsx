import tw, { styled } from 'twin.macro';
import happyKkubook from '../assets/happy-kkubook.png';
import kakaologin from '../assets/kakaologin.png';

const Page = styled.div`
  ${tw`flex flex-col items-center`}
  height: 100vh;
`;

const Img = styled.img`
  ${tw`block mb-3`}
  width: 150px;
  height: auto;
`;

const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function Intro() {
  return (
    <Page>
      <Img src={happyKkubook} alt="Kkubook character" />
      <h1>꾸북</h1>
      <a href={KAKAO_URL}>
        <img src={kakaologin} alt="kakao login" />
      </a>
    </Page>
  );
}

export default Intro;
