FROM node:fermium-alpine3.15 as builder

WORKDIR app

ADD package.json yarn.lock ./

RUN apk add --no-cache git openssh

RUN yarn install

COPY public ./public
COPY src ./src

RUN yarn build

FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]