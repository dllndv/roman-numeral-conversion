FROM node:22.13.1-alpine3.21

ENV NODE_VERSION 22.13.1

EXPOSE 3000

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

CMD ["yarn", "run", "dev"]
