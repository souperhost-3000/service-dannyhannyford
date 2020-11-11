From node:15.1.0-alpine3.12

RUN mkdir -p src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3007

CMD ["npm", "start"]