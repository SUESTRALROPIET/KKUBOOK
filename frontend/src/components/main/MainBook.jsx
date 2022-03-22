import PropTypes from 'prop-types';
import tw, { styled } from 'twin.macro';

const BookContainer = styled.div`
  width: 100%;
  background-color: azure;
  border-radius: 30px;
  padding: 2rem;

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    height: 20px;
  }

  .contents {
    display: flex;

    .progress {
      width: 100%;
      margin-left: 1rem;
      padding-top: 5rem;
    }
  }

  img {
    width: 100px;
    height: 140px;
  }
`;

const ProgressBar = styled.div`
  ${tw`
    w-full
    bg-gray-200
    rounded-full
    h-2.5
    dark:bg-gray-700`}
`;

const Bar = styled.div(({ progressRate }) => [
  tw`
    bg-blue-600
    h-2.5 
    rounded-full
  `,
  `width: ${progressRate}%`,
]);

function MainBook({ book }) {
  const { title, author, image, startFrom, totalPage, page, status } = book;

  return (
    <BookContainer>
      <h3 className="title">{title}</h3>
      <h5>{author}</h5>
      <div className="contents">
        <img src={image} alt={title} />
        <div className="progress">
          <div className="progress-items">
            <p>시작일 {startFrom}</p>
            <ProgressBar>
              <Bar progressRate={(page / totalPage) * 100} />
            </ProgressBar>
            <p>
              {totalPage} 중에 {page} 페이지
            </p>
          </div>
        </div>
      </div>
      <button type="button">책 읽기</button>
      <button type="button">메모 하기</button>
    </BookContainer>
  );
}

MainBook.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    image: PropTypes.string,
    startFrom: PropTypes.string,
    totalPage: PropTypes.number,
    page: PropTypes.number,
    status: PropTypes.number,
  }).isRequired,
};

export default MainBook;
