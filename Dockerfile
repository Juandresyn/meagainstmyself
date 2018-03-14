FROM ubuntu:14.04

RUN apt-get update && sudo apt-get install -y curl git-core
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && apt-get install -y nodejs
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN npm install pm2 yarn @octokit/rest -g -y

EXPOSE 8080
EXPOSE 3000

ENV APP_DIR=/usr/src/app
ENV NODE_ENV=dev
ENV HOST=0.0.0.0
ENV PORT=80
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

COPY package.json $APP_DIR
RUN yarn
COPY . $APP_DIR

CMD pm2-docker start yarn -- start
