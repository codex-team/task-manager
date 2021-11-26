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

COPY ./backend/package.json ./backend/yarn.lock ./backend/
RUN cd backend && yarn install --prod

COPY . .
COPY --from=frontend /usr/src/app/build ./frontend/build

EXPOSE 3000

WORKDIR /usr/src/app/backend
CMD ["yarn", "start"]
