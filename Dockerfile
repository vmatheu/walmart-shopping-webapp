FROM node:13.12.0-alpine

WORKDIR /app

EXPOSE $PORT

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./