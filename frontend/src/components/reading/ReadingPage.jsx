import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Time from './Time';
import Book from './Book';

const StyledReadingPage = styled.div`
  background-color: #2a4753;

  .time-container {
    width: 90%;
    margin: 0px auto;
    min-height: 71vh;
    background-color: azure;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button-container {
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      width: 48%;
      height: 50px;
    }
  }
`;

function ReadingPage({
  time,
  isTimerActive,
  setIsTimerActive,
  isTimeVisible,
  book,
  setIsReadingPage,
}) {
  const navigate = useNavigate();

  return (
    <StyledReadingPage>
      <button type="button" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="time-container">
        <h1>{isTimerActive ? '독서 중' : '쉬는 중'}</h1>
        {isTimeVisible && <Time time={time} />}
      </div>

      <Book
        book={book}
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />

      <div className="button-container">
        <button type="button">메모하기</button>
        <button
          type="button"
          onClick={() => {
            setIsReadingPage(false);
            setIsTimerActive(false);
          }}
        >
          독서완료
        </button>
      </div>
    </StyledReadingPage>
  );
}

export default ReadingPage;
