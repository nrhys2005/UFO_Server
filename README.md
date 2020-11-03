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
    * 여기에 너네가 대충 생각나는대로 시간 순으로 적어주면 됨 Mobile쪽 리드미 참고 해서
    * 아니면 너네 입맛에 맞게 바꿔도 되고
* AWS
    * 아직 없음

## 개발 계획
* NodeJS
    * 여기도 마찬가지
* AWS
    * Server 관련 리소스 및 환경설정 변경하여 EC2로 이관 구현
    * S3 이용하여 Fabric Network의 인증서 파일, 이미지 등 정적파일 관리 구현