# syntax=docker/dockerfile:1

FROM node:14.16.0


WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
# RUN npm start