FROM debian:8

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && apt-get install -y nodejs
RUN apt-get update && sudo apt-get install yarn
RUN apt-get install -y git-core
RUN npm install pm2 -g

EXPOSE 8080

ENV APP=/usr/src/app
ENV NODE_ENV=dev
RUN mkdir -p $REPORTING_DIR
WORKDIR $REPORTING_DIR

COPY package.json $REPORTING_DIR
RUN npm install
COPY . $REPORTING_DIR

CMD pm2-docker start yarn start
