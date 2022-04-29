# 라이엇 API를 이용한 LOL 소환사 전적 검색 사이트

> > https://leeheeae.github.io/lol-search-react/ - view page

## 프로젝트

> > Toy 프로젝트

- **프로젝트명**: LOL Search Proejct
- **소개**: 리그오브레전드 게임을 이용하는 소환사의 정보를 검색하거나 챔피언에 대한 정보를 확인할 수 있는 사이트

### 프로젝트 정보

**사용 기술**
`react`, `react-helmet-async`,`react-icons`, `react-redux`, `redux`, `react-router-dom`, `react-actions`, `redux-devtools-extension`, `redux-saga`, `styled-components`, `axios`, `qs`

**사용한 API**

> > https://developer.riotgames.com/

**이미지 및 데이터 파일**

> > https://developer.riotgames.com/docs/lol#data-dragon

---

### 메인 페이지

> > 소환사명으로 소환사 정보 검색, 금주의 로테이션 챔피언 한눈에 확인하기

1. 소환사 정보 검색

- Search박스에 소환사명을 검색하여 소환사정보 확인하기
- 헤더부분의 search와 메인페이지의 saerch를 같은 컴포넌트로 사용

2. 금주의 로테이션 챔피언 표시

- 라이엇 API를 이용하여 금주의 로테이션 챔피언 데이터 받아오기
- 해당 챔피언의 이름과 이미지를 이용하여 한눈에 확인 가능하도록 표시
- 클릭 시 해당 챔피언 정보 페이지로 이동

### 검색 페이지

1. summoner 정보

- `id`, `accountId`, `puuid`, `name`, `profileIconId`, `revisionDate`, `summonerLevel`
- 소환사명으로 검색했을 때 검색된 params를 이용하여 소환사의 정보 표시
- 소환사명이 2글자일 경우에는 이름사이 공백 추가하여 검색하도록 설정

2. summonerID + Reague 매칭

- summoner의 id 값을 이용하여 reague 매칭
  - `leagueId`, `queueType`,`tier`, `rank`, `leaguePoints`, `wins`,`losses`
- queueType은 솔로랭크, 자유랭크만 표현하기위해 데이터를 내려보낼 때 fillter로 TFT 정보는 걸러주기

3. 티어별 이미지

- `https://developer.riotgames.com/docs/lol#data-dragon`에서 이미지 받아오기
- 티어 이미지 저장 후 로컬에 저장한 후 매칭한 reague의 tier값을 확인하여 해당 티어별 이미지 적용하기
  - 해당 파일의 이름을 전체 바꿔도 되지만 스크립트 기능을 좀 더 활용해보기 위해 전체를 소문자로 바꾼 후 첫글자만 대문자로 표시되도록 함수 만들어서 설정
    - `toLowerCase()`, `toUpperCase()`,`slice()` 사용
- 매칭하여 파일을 설정해야하기 때문에 import 하여 사용하지 않고 `process.env.PUBLIC_URL`을 이용하여 각 파일 경로 설정

4. 인게임 정보 확인 데이터

- 인게임정보 확인하기 버튼을 클릭했을 때 게임중인 경우에만 데이터 표시
  - 사용중인 챔피언, 스펠, 아이디를 표시
  - 게임중이 아닐 경우 게임중이 아닙니다. 라는 메세지 표시
  - 레드팀, 블루팀 구분하여 데이터 내려주기
  - 게임모드와 게임 길이 데이터를 받아와서 표시

5. 전적 리스트 (10개)

- 최근 전적 리스트 표시 (10개)
- 승리 패배 구분
- 맵 이름 구분
- 게임 시작 몇일 또는 몇시간 전 표시
- 게임 길이 표시
- 챔피언 이름 및 이미지 표시
- 스펠 2개 표시
- k/d/a 및 평점 표시
- 킬로그 표시
- 아이템 표시
- 레벨, cs, 킬관여율 표시
- 함께 게임한 참가자 표시
  - 이름 클릭시 그 소환사로 검색

### 챔피언 분석 페이지

1. 챔피언 전체 확인하기

- 라이엇 API를 이용하여 챔피언 전체 리스트 불러오기
- 각 포지션에 따라 클릭하여 구분하여 확인 가능하도록 설정
- 클릭 시 해당 챔피언 정보 확인 페이지로 이동

2. 챔피언 태그 구분하여 확인하기

- 챔피언마다 주어진 태그를 탭을 이용하여 구분하여 표시
- 챔피언 이름, 태그, 이미지 화면에 표시

### 챔피언 상세 페이지

1. 기본 정보

- 이미지, 태그, 이름정보를 표시
- 패시브스킬, 스킬3개에 대한 이미지로 구현
  - 마우스 올렸을 경우 스킬에 대한 상세내용 확인 가능

2. TIPS

- 아군, 적군 상대 팁 확인 가능

3. 스킨리스트

- 챔피언의 스킨 종류를 이미지리스트로 뿌림
- 작은 이미지 클릭시 선택한 이미지로 큰 이미지 부분 변경
