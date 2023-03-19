#stage react app
FROM node:18.12.1-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY yarn.lock .

RUN yarn

COPY . ./

RUN yarn build


#stage nginx server
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]