#!/bin/bash


########################################
# .env setting 은 이렇게 해 주세요
# HOST = 0.0.0.0
# PORT = 8080

# DBUSERNAME = root
# DBPASSWORD = root
# DBHOST = mysql
# DBDIALECT = mysql
# DBDATABASE = ufo
# DBPORT = 3306

# REDISPORT = 6379
# REDISHOST = redis
# REDISPASSWORD = redispw
# REDISSECRET = UFO
########################################


########################################
# ufo 이미지를 빌드 해 주세요
# docker build -t ufo:0.04 .

# 빌드한 이미지의 버전에 맞게 swarm-docker-compose.yaml 파일의 line-4 를 수정합니다.
########################################

# swarm 시작, 세팅
docker swarm init;

sleep 1;

# stack으로 서비스 묶고 yaml파일의 옵션대로 실행
docker stack deploy --compose-file=swarm-docker-compose.yaml UFO

# localhost 접속해보기.

# 이미지 업데이트
# docker build -t ufo:버전넘버 .
# docker service update --image ufo:0.03 UFO_app


# swarm 삭제
# docker swarm leave --force