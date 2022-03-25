import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReadingPage from '../components/reading/ReadingPage';
import RecordPage from '../components/reading/RecordPage';
import useStore from '../stores/book';

const Page = styled.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: azure;
`;

function Reading() {
  const [isReadingPage, setIsReadingPage] = useState(true); // 읽는 중 vs 기록 중
  const [isTimerActive, setIsTimerActive] = useState(true); // 읽는 중 vs 쉬는 중
  const [isTimeVisible, setIsTimeVisible] = useState(true);
  const [time, setTime] = useState(0);
  const { bookId } = useParams();
  const book = useStore(
    useCallback(
      state => {
        return state.books.find(item => {
          return item.id === Number(bookId);
        });
      },
      [bookId],
    ),
  );

  useEffect(() => {
    if (time === 120) {
      setIsTimeVisible(false);
    }
  }, [time]);

  useEffect(() => {
    let ticking = null;

    if (isTimerActive) {
      ticking = setInterval(() => {
        setTime(prevTime => {
          return prevTime + 1;
        });
      }, 1000);
    } else {
      clearInterval(ticking);
    }
    return () => {
      clearInterval(ticking);
    };
  }, [isTimerActive]);

  return (
    <div>
      {isReadingPage ? (
        <Page>
          <ReadingPage
            time={time}
            book={book}
            isTimerActive={isTimerActive}
            setIsTimerActive={setIsTimerActive}
            isTimeVisible={isTimeVisible}
            setIsTimeVisible={setIsTimeVisible}
            setIsReadingPage={setIsReadingPage}
          />
        </Page>
      ) : (
        <Page>
          <RecordPage time={time} />
        </Page>
      )}
    </div>
  );
}

export default Reading;
