# UFO_Server

[1. 개발 환경](#개발-환경)    
[2. 개발 내용](#개발-내용)    
[3. 개발 과정](#개발-과정)       
[4. 개발 계획](#개발-계획) 

## 개발 환경
* Mac & Ubuntu
* Docker
* NodeJS
* MySQL     
* AWS   

## 개발 내용
* AWS로 이관전에는 Mac, Ubuntu의 개발환경 차이를 없애기 위해 Docker Container를 활용
* Mobile에서 오는 각종 요청들을 처리
* 결제 관련 요청을 Fabric Network로 연결
* AWS EC2, RDS, S3, IAM 등을 이용하여 이관

## 개발 과정
* NodeJS
    * 데이터베이스 설계(User, Store, Menu) 
      * MySQL, Sequelize 사용
    * 라우팅 구조 설정
      * routes 디렉토리는 기능분류와 기능에 따른 소스코드 경로설정
      * src 디렉토리는 소스코드 작성
    * Docker를 사용
      * Mac과 Linux 개발 환경 일치화
    * 기능 구현(사용자)
      * 회원가입
      * id 중복체크
      * 로그인
    * 기능 구현(상점)
      * 상점 등록(상점 이미지, 이름, 위치 등)
      * 상점 정보 반환
    * 기능 구현(메뉴)
      * 메뉴 등록(메뉴 이미지, 이름, 가격 등 )
    * DataBase 정보, Port, ip 등 환경변수화?
* AWS
    * 파일 업로드 스토리지 S3로 전환
    * EC2 Instance 및 RDS 생성

## 개발 계획
* NodeJS
    * 세션 구현
    * user 테이블 지우고 로그인을 카카오 로그인으로 대체
    * Fabric Network 안정화 시 Wallet 작업(송금, 잔액확인 등)
* AWS
    * ~~Server 관련 리소스 및 환경설정 변경하여 EC2로 이관 구현~~
    * S3 이용하여 Fabric Network의 인증서 파일, 이미지 등 정적파일 관리 구현
    * LoadBalancer, AutoScaling Group 구축
    
## 서비스 흐름

- 앱 실행시
    - Sales 유저
        - Sales 그룹으로 가입
            - 기존에 Customer 였으면 Sales로 새로 생성 후 잔액 이체
    - 일반 사용자
        - Customer 그룹으로 가입
- Splash
    - 최초 실행시
        - 사용자가 선택한 Festival ID로 Festival, Store, Menu Info 반환
    - 이후 실행시
        - ETag를 활용 업데이트 여부 확인
- Home
    - 충전
    - 송금
- Festival
    - 축제 선택, 스토어 선텍, 메뉴 선택시 ETag를 통해 수정사항 확인
- MyPage
    - 회원정보 띄우기
        - 거래 내역 정보 반화
        - 충전 내역 정보 반환
- 축제 종료시
    - 정산
    - Sales의 거래 통계
    - 몇 일의 유예기간을 두고 Sales 아이디 삭제


- AWS
    - VPC, Subnet
    - S3 CA json 파일 참조
    - EC2, LoadBalancer, AutoScaling
