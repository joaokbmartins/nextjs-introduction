FROM node:14.15.4-alpine3.12

COPY . /home/node/app

WORKDIR /home/node/app
USER node
