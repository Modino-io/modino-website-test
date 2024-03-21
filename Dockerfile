FROM node:20-alpine as builder

WORKDIR /app

COPY package.json .
RUN npm install --ignore-scripts
COPY . .
RUN ["npm", "run", "build"]

FROM nginx:1.25.4
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html
