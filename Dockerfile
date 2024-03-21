FROM node:alpine as installer

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci


FROM installer as builder
COPY . .
RUN ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public/zopfli /usr/share/nginx/html
