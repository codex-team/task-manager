#
# Building React frontend
#
FROM node:16-alpine as frontend

WORKDIR /usr/src/app

COPY ./app/frontend/package.json ./app/frontend/yarn.lock ./
RUN yarn install --prod

COPY ./app/frontend ./
RUN yarn build

#
# Building container with Task Manager
#
FROM node:16-alpine

WORKDIR /usr/src/app

COPY ./app/backend/package.json ./app/backend/yarn.lock ./backend/
RUN cd backend && yarn install --prod

COPY ./app .
COPY --from=frontend /usr/src/app/build ./frontend/build

EXPOSE 3000

WORKDIR /usr/src/app/backend
CMD ["yarn", "start"]
