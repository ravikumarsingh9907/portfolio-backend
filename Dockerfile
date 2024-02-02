FROM node:alpine

WORKDIR /portfolio-app

COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 7974

CMD [ "node", "app.js" ]