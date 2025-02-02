# JavaScript 문제 풀이 및 테스트 실행 안내

이 레포지토리는 **JavaScript 기초 문법**을 학습하고 테스트하는 환경을 제공합니다. 학생들은 `npm test`를 통해 테스트를 실행하고, 올바른 코드를 작성하여 `Pull Request (PR)`를 제출함으로써 평가를 받게 됩니다.

## 📋 문제 구성

- 총 **5개의 문제**가 포함되어 있습니다.
- 각 문제는 개별 폴더로 구성되어 있으며, **문제 파일**과 **테스트 파일**로 분리되어 있습니다:

```
problem01/
├── problem01.js # 문제 1
└── problem01.test.js # 문제 1 테스트 코드
problem02/
├── problem02.js # 문제 2
└── problem02.test.js # 문제 2 테스트 코드
problem03/
├── problem03.js # 문제 3
└── problem03.test.js # 문제 3 테스트 코드
problem04/
├── problem04.js # 문제 4
└── problem04.test.js # 문제 4 테스트 코드
problem05/
├── problem05.js # 문제 5
└── problem05.test.js # 문제 5 테스트 코드
```

## 🚀 실행 방법

### 1. 프로젝트 설치

```bash
npm install
```

### 2. 전체 테스트 실행

모든 문제에 대한 테스트를 실행하려면 다음 명령어를 사용합니다:

```bash
npm test
```

### 3. 개별 테스트 실행

특정 문제만 실행하려면 해당 파일의 경로를 지정합니다:

```bash
npm test problem01/problem01.test.js
```

## 📝 Pull Request (PR) 제출

1. 모든 테스트를 통과하도록 코드를 수정합니다.
2. 자신의 GitHub 계정에서 이 레포지토리를 **Fork**합니다.
3. 코드를 수정한 후, 자신의 레포지토리에 **커밋**하고 **PR**을 생성합니다.
4. PR이 생성되면, GitHub Actions를 통해 테스트 결과가 자동으로 실행됩니다.

## 🔗 테스트 결과 확인

PR 생성 후, 테스트 결과는 아래와 같은 GitHub Actions URL에서 확인할 수 있습니다:

```
https://github.com/grepp-aibe/push_me_01_01/actions
```

결과는 통과 여부와 실패한 테스트 케이스에 대한 정보를 제공합니다.
