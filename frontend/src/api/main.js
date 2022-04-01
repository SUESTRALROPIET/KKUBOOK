import apiInstance from '../utils/apiInstance';
import formatKey from '../utils/snakeToCamel';

// 책 검색하기 (index 0: 책 제목 / index 1: 작가 / index 2: isbn)
export function apiSearchBook({ word, index }, success, fail) {
  apiInstance
    .get(`kkubooks/main/search/?word=${word}&index=${index}/`)
    .then(success)
    .catch(fail);
}

// 북커밋 기록 불러오기
export function getBookCommit(success, fail) {
  apiInstance.get('kkubooks/main/commits/').then(success).catch(fail);
}

// 책 상세조회
export function getBookDetail(book_id, success, fail) {
  apiInstance.get(`kkubooks/main/book/${book_id}/`).then(success).catch(fail);
}

export function getNaverUrl(reqData, success, fail) {
  apiInstance
    .get('kkubooks/bookshelf/naver/search/', {
      params: reqData,
    })
    .then(success)
    .catch(fail);
}

export async function getBooklist() {
  try {
    const { data } = await apiInstance.get('kkubooks/main/booklist/');
    return data.map(item => formatKey(item));
  } catch (err) {
    return err;
  }
}

export async function submitRating(bookshelf_id, rating) {
  try {
    const { data } = await apiInstance.put(
      `kkubooks/main/${bookshelf_id}/rating/`,
      { rating },
    );
    return data;
  } catch (err) {
    return err;
  }
}
