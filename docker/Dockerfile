#
# Building React frontend
#
FROM node:16-alpine as frontend

# Set up app's root directory
WORKDIR /usr/src/app

# Copy lists of dependencies
COPY ./app/frontend/package.json ./app/frontend/yarn.lock ./frontend/

# Move to the frontend directory to install node deps
RUN cd frontend && yarn install --prod

# Copy sources and types
COPY ./app/frontend ./frontend
COPY ./app/types ./types

# Install reqiured types
RUN cd types && yarn install --prod

# Move again into the frontend directory and build it
RUN cd frontend && yarn build

#
# Building container with Task Manager
#
FROM node:16-alpine

# Set up app's root directory
WORKDIR /usr/src/app

# Copy lists of dependencies
COPY ./app/backend/package.json ./app/backend/yarn.lock ./backend/
# Move to the backend directory to install node deps
RUN cd backend && yarn install --prod

# Copy lists of dependencies
COPY ./app/types/package.json ./app/types/yarn.lock ./types/
# Install reqiured types
RUN cd types && yarn install --prod

# Copy sources and bundled frontend build
COPY ./app .
COPY --from=frontend /usr/src/app/build ./frontend/build

# Expose app's port
EXPOSE 3000

# Move to the backend directory and start the app
WORKDIR /usr/src/app/backend
CMD ["yarn", "start"]
