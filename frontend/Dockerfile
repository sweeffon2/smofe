# build image
FROM node:18-bullseye as node
WORKDIR /app
COPY configs/* /app/
COPY *.json /app/
RUN npm install
COPY typings /app/typings
COPY e2e /app/e2e
COPY src /app/src
RUN npm run build --prod

# deploy image
FROM nginx:alpine
COPY --from=node /app/dist /usr/share/nginx/html