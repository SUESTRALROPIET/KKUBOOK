import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import Time from './Time';
import useStore from '../../stores/bottomSheet';
import PageInput from './PageInput';

const StyledRecordPage = styled.div`
  .record {
    position: relative;
    top: 5rem;
  }

  .record-box {
    ${tw`bg-light-gray`}
    display: flex;
    align-items: center;
    height: 6rem;
    width: 90%;
    margin: 2rem auto;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0px 2px 5px 1px gray;
  }

  .content {
    margin: 10px;
    text-align: left;
  }

  .title {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .page {
    font-size: 20px;
  }

  button {
    border: 0;
    outline: 0;
  }
`;

function RecordPage({ time, setIsReadingPage }) {
  const openBottomSheet = useStore(state => state.openSheet);
  const totalPage = 100;
  const initialPage = 1;
  const [page, setPage] = useState(initialPage);
  const submitPage = submittedPage => {
    if (submittedPage === 'done') {
      setPage(totalPage);
      return;
    }

    if (submittedPage === 'stop') {
      openBottomSheet();
      return;
    }

    setPage(Number(submittedPage));
  };

  useEffect(() => {
    openBottomSheet(PageInput, '페이지 기록하기', submitPage);
  }, []);

  return (
    <StyledRecordPage>
      <button type="button" onClick={() => setIsReadingPage(true)}>
        Back
      </button>

      <h3>오늘의 독서기록</h3>

      <div className="record">
        <button type="button" className="record-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width="55px"
            height="55px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="content">
            <p className="title">읽은 시간</p>
            <Time time={time} />
          </div>
        </button>

        <button
          type="button"
          className="record-box"
          onClick={() =>
            openBottomSheet(PageInput, '페이지 기록하기', submitPage)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            width="55px"
            height="55px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <div className="content">
            <p className="title">읽은 페이지</p>
            <p>
              <span className="page">P. {page}</span> / {totalPage}
            </p>
          </div>
        </button>
      </div>
    </StyledRecordPage>
  );
}

export default RecordPage;
