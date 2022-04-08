# 독서 습관 형성 서비스 :turtle: 꾸북 :turtle:
<p align="center"><img src="README.assets/kkubooLogo.png"></p>


# 목차

[프로젝트 소개](#프로젝트-소개)

[주요 기능](#주요-기능)

[사용 방법](#사용-방법)

[기술 스택](#기술-스택)

[배포](#배포)

[프로젝트 일정](#프로젝트-일정)

[팀원](#팀-소개)

<br/>

# 프로젝트 소개

<center>
<a href="README.assets/와이어프레임.pdf">와이어 프레임</a>	·	<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrv6z1Tr4RNiDNgoKcM3Y3N34dwX5X3SfCxAPgqhzsGE2RDX9beJwbnKCvCYztrJlsnK6HUGnv_u0C/pubhtml?gid=1305377450&single=true">기술명세서</a>	·	<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRrv6z1Tr4RNiDNgoKcM3Y3N34dwX5X3SfCxAPgqhzsGE2RDX9beJwbnKCvCYztrJlsnK6HUGnv_u0C/pubhtml?gid=126235209&single=true">API문서</a>
</center>  


<br/>

# 꾸북

👉 꾸북은 독서 초보자가 독서 습관을 들여나갈 수 있도록 도와주는 플랫폼입니다.

<br/>

# 기획 의도

이미 다양한 독서 관리 어플은 존재합니다. 기존의 어플들은 기록을 잘하기 위해 사용하기에는 좋지만, 독서 초보자들이 독서에 재미를 붙이고 습관은 들여나가기에는 힘들 거라고 생각했습니다.
<br/>
꾸북 서비스는 이제 막 독서를 시작하려는 사람들이 쉽게 독서 습관을 들여나갈 수 있도록 고안되었습니다.

<br/>

# 주요 기능

#### 일반 모드의 기능은 언제나 이용할 수 있습니다.

#### 꾸북 모드를 켜면 100일간의 독서 습관 형성 챌린지가 시작됩니다.

</br>

#### [일반모드]

1. 초기 설문 및 사용자가 매긴 책 평점을 바탕으로 책을 추천해 줍니다.    

    ![일반1](README.assets/일반1-1.gif)
    ![일반1](README.assets/일반1.gif)
  
2. 제목, 저자 검색, 바코드로 책을 찾아 책장에 등록하고 관리할 수 있습니다.

    ![일반2](README.assets/일반2.gif)

3. 독서 타이머로 책 읽는 시간, 어디까지 읽었는지 페이지를 기록할 수 있습니다.

    ![일반3](README.assets/일반3.gif)
4. 책을 읽으면서 사진과 글로 메모를 작성할 수 있습니다.
  
    ![일반4](README.assets/일반4.gif)

5. 독서 기록을 남긴 날은 커밋이 이루어지고 약 4개월치 커밋 기록을 한 눈에 확인할 수 있습니다.
  
    ![일반5](README.assets/일반5.jpg)

6. 월별 독서 통계(장르, 권)을 제공합니다.

    ![일반6](README.assets/일반6.gif)

</br>

#### [꾸북모드]

1. 정해진 시간에 오늘 독서를 했는지 확인하는 리마인드 알림을 전송합니다.

    ![꾸북1](README.assets/꾸북1.jpg)

2. 레벨 1부터 시작해 10일 동안 책을 읽으면 레벨업합니다. 총 100일 동안 레벨 10까지 레벨업 할 수 있습니다.

    ![꾸북2](README.assets/꾸북2.gif)

3. 100일 동안 챌린지를 완료할 경우 꾸북 뱃지를 수여합니다.

    ![꾸북3](README.assets/꾸북3.gif)

4. 만약 100일동안 누적 10일 이상 책을 읽지 않으면 꾸북모드는 자동으로 종료됩니다.

</br>

# 기술 스택

### Frontend

- ES2015+
- React
- StyledComponents
- TailwindUI
- react-router-dom
- zustand

<br/>

### Backend

- Kakao Login API
- Naver Book API
- PyJWT
- Scipy
- Django Rest Framework
- MariaDB
- Numpy
- Matrix Factorization

<br/>

# 프로젝트 구조

![꾸북아키텍쳐](README.assets/꾸북아키텍쳐.PNG)

</br>

### ERD

![image-20220408101626092](README.assets/image-20220408101626092.png)

</br>

### 설치 및 실행

- Front-End

  ```bash
  cd frontend
  npm install
  npm start
  ```

- Back-End

  ```bash
  cd backend
  python -m venv venv
  source venv/Scripts/activate
  pip install -r requirements.txt
  ```

<br/>

# 프로젝트 일정

### 전체 기간 2022. 02. 21 ~ 2022. 04. 08

<br/>

#### `1주차 - 사전 학습(2022. 02. 21 ~ 2022. 02. 25)`

- 빅데이터 추천 사전 학습

#### `2 ~ 3주차 - 기획(2022. 02. 28 ~ 2022. 03. 11)`

- 브레인스토밍, 기획
- 아이디어 확정 및 기술 스택 검토

#### `4주차 - 와이어프레임과 DB 설계, API 문서 작성(2022. 03. 14 ~ 2022. 03. 18)`

- ERD 작성
- 와이어프레임 작성
- API 문서 작성

#### `5 ~ 6 주차 - 개발, 배포`

- MF 추천 알고리즘 구현
- RESTful API 구현
- 와이어프레임 바탕으로 UI, UX 구현

#### `7 주차 - 버그 수정 및 프로젝트 마무리`

- UCC 제작

<br/>

# 팀 소개

💡 백민아: 백엔드 개발, 추천 알고리즘

🎊 원유진: 프론트 개발, 프로토타이핑

🐱 이소현: 백엔드 개발, 추천 알고리즘

👑 최승연: 팀장, 프론트 개발, 프로토타이핑

🛠 최시열: 백엔드 개발, 추천 알고리즘, 배포

⏰ 한우리: 프론트 개발, 프로토타이핑
