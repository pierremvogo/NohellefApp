FROM node:fermium-alpine3.15

WORKDIR app

ADD package.json yarn.lock ./

RUN apk add --no-cache git openssh

RUN yarn install

COPY public ./public
COPY src ./src

EXPOSE 3000

CMD ["yarn", "start"]