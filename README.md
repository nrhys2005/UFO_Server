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

## 개발 계획
* NodeJS
    * 세션 구현
    * user 테이블 지우고 로그인을 카카오 로그인으로 대체
    * Fabric Network 안정화 시 Wallet 작업(송금, 잔액확인 등)
* AWS
    * Server 관련 리소스 및 환경설정 변경하여 EC2로 이관 구현
    * S3 이용하여 Fabric Network의 인증서 파일, 이미지 등 정적파일 관리 구현
