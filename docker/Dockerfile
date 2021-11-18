#
# Building React frontend
#
FROM node:16-alpine as frontend

WORKDIR /usr/src/app

COPY ./frontend/package.json ./frontend/yarn.lock ./
RUN yarn install --prod

COPY ./frontend ./
RUN yarn build

#
# Building container with Task Manager
#
FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./package.json yarn.lock ./
RUN yarn install --prod

COPY . .

COPY --from=frontend /usr/src/app/build ./frontend/build

EXPOSE 3000

CMD ["yarn", "start"]
