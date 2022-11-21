FROM node:16-alpine

WORKDIR /app-frontend

COPY package* ./

COPY . .

RUN npm install

CMD [ "npm", "start" ]