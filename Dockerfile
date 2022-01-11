FROM node:16

WORKDIR /app

COPY ./api ./api
WORKDIR /app/api
RUN yarn

WORKDIR /app

COPY ./package.json .
COPY ./src ./src
COPY ./public ./public

RUN yarn
RUN yarn build
RUN yarn global add serve


COPY ./start.sh .
RUN chmod +x start.sh

EXPOSE 3000 3001

CMD ["./start.sh"]

