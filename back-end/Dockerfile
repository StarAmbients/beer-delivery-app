FROM node:16-alpine

WORKDIR /app-backend

COPY package* ./

COPY . .

RUN npm install

ARG NODE_ENV=production

CMD [ "npm", "start" ]