#
# Prepare frontend sources
#
FROM node:16-alpine

# Set up app's root directory
WORKDIR /usr/src/app

# Copy lists of dependencies
COPY ./app/frontend/package.json ./app/frontend/yarn.lock ./frontend/

# Move to the frontend directory to install node deps
RUN cd frontend && yarn install

# Copy sources and types
COPY ./app/frontend ./frontend
COPY ./app/types ./types

# Install reqiured types
RUN cd types && yarn install

# Expose app's port
EXPOSE 6006

# Move to the frontend directory and start the storybook
WORKDIR /usr/src/app/frontend
CMD ["yarn", "storybook"]
