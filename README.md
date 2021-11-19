# CodeX Task Manager

Task management system for teams.

- Stores tasks
- Promotes their implementation
- Increases work efficiency

## How to run with Docker

Clone the repository.

`git clone https://github.com/codex-team/task-manager`

Go to directory.

`cd task-manager`

Run app's containers with the following command.

`docker-compose up`.

Container with the app will install or update dependencies
if it is required and run the `start:dev` script.

App will be restarted automatically on any code changes.

Frontend site: [localhost:3030](localhost:3030)
Backend site: [localhost:3000](localhost:3000)

### Remove node deps for containers

If you need to remove `back-node-deps` or `front-node-deps` volume
with `node_modules` directory for the app or front container
then put down containers and remove that volume.

```
docker-compose down
docker volume rm task-manager_back-node-deps
docker volume rm task-manager_front-node-deps
```

## Run for development

### Frontend

Go to frontend directory:

```
cd frontend
```

To start frontend node server with hot module reloading use:

```
yarn start
```

To create a `build` directory with a production build of the app use:

```
yarn build
```

To start storybook's component explorer on port 6006 use:

```
yarn storybook
```
