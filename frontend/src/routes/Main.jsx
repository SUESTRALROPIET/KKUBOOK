import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import MainBooks from '../components/main/MainBooks';
import books from '../data/books';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <FabButton />
      <h1>Main Page</h1>
      <MainBooks books={books} />
      <button type="button" onClick={() => navigate('reading')}>
        책 읽기
      </button>
    </>
  );
}

export default Main;
