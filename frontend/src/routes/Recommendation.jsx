/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'twin.macro';
import Slider from 'react-slick';
import Navbar from '../components/common/Navbar';
import FabButton from '../components/common/FabButton';
import SelectEmotion from '../components/recommendation/SelectEmotion';
import BookResult from '../components/recommendation/BookResult';
import books from '../data/books';
import useStoreUserInfo from '../stores/user';
import { getUserBooks, getBestBooks } from '../api/recommend';

const RecommendRoot = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  padding-bottom: 5rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;
  .header {
    font-size: 30px;
    font-weight: bold;
  }
  #search-icon {
    width: 30px;
    cursor: pointer;
  }
`;

const Categories = styled.div`
  .category {
    padding-bottom: 1rem;
    p {
      font-size: 25px;
      padding-bottom: 1rem;
    }
  }
`;

function Recommendation() {
  const navigate = useNavigate();
  const userNickname = useStoreUserInfo(state => state.userInfo.nickname);
  const [userBooks, setUserBooks] = useState([]);
  const [bestBooks, setBestBooks] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
  };

  useEffect(() => {
    getUserBooks(
      response => setUserBooks(response.data),
      error => console.log(error),
    );
    getBestBooks(
      response => setBestBooks(response.data),
      error => console.log(error),
    );
  });
  return (
    <>
      <Navbar />
      <FabButton />
      <RecommendRoot>
        <Header>
          <p className="header">추천</p>
          <svg
            id="search-icon"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#848282"
            onClick={() => navigate('/searchkeyword')}
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </Header>
        <SelectEmotion />
        <Categories>
          <div className="category">
            <p>{userNickname} 님을 위한 추천</p>
            <Slider {...settings}>
              {books.map(book => (
                <BookResult key={book.id} book={book} />
              ))}
            </Slider>
          </div>
        </Categories>
      </RecommendRoot>
    </>
  );
}

export default Recommendation;
