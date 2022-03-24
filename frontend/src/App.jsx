import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './routes/Main';
import Library from './routes/Library';
import Memo from './routes/Memo';
import Recommendation from './routes/Recommendation';
import MyInfo from './routes/MyInfo';
import Reading from './routes/Reading';
import SearchBook from './components/main/SearchBook';
import RegisterBook from './components/main/RegisterBook';
import Intro from './routes/Intro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Main />} />
        <Route path="/library" element={<Library />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/searchbook" element={<SearchBook />} />
        <Route path="/searchbook/registerbook" element={<RegisterBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
