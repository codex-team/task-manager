# CodeX Task Manager

Task management system for teams.

- Stores tasks
- Promotes their implementation
- Increases work efficiency

## How to run with Docker

Clone the repository.

`git clone https://github.com/codex-team/task-manager`

Go to project's directory.

`cd task-manager`

Create an environment file `.env` in the [app/backend](./app/backend) directory by its sample.

`cp app/backend/.env.sample app/backend/.env`

Run app's containers with the following command.

`docker-compose up`.

Container with the app will install or update dependencies
if it is required and run the `start:dev` script.

App will be restarted automatically on any code changes.

Backend site: [localhost:3000](localhost:3000)
Frontend hot-reloaded build: [localhost:3030](localhost:3030)
Frontend Storybook: [localhost:6006](localhost:6006)

### Database migrations

On the **local machine** just run the following command:

`docker-compose exec backend sh -c "cd backend; yarn db-migrate"`

And almost the same command for **production docker environment**:

`docker-compose -f docker-compose.prod.yml exec app sh -c "cd backend; yarn db-migrate"`

### Remove node deps for containers

If you need to remove `back-node-deps` or `front-node-deps` volume
with `node_modules` directory for the app or front container
then put down containers and remove that volume.

```
docker-compose down
docker volume rm task-manager_back-node-deps
docker volume rm task-manager_front-node-deps
```

## Frontend development

> If you run Task Manager in docker for development
> Frontend server will be run in docker
> on [localhost:3030](localhost:3030).
>
> You don't need to commit changes for build directory.

Go to frontend directory:

```
cd frontend
```

To start frontend node server with hot module reloading use.

```
yarn start
```

To create a `build` directory with a production build of the app use:

```
yarn build
```

### Storybook

> Storybook will be run automatically in docker for development
> on [localhost:6006](localhost:6006).

To start storybook's component explorer manually on port 6006 use:

```
yarn storybook
```

## Deployment

To deploy a new version of the Task manager, push changes
(use a created PR from bot) to `prod` or `stage` branches.

On any update for `prod`/`stage` this [workflow](.github/workflows/build-and-push-docker-image.yml)
will publish an updated container to [hub.docker.com](https://hub.docker.com/r/codexteamuser/task-manager)
with a tag `prod`/`stage`.

Server runs [docker-compose for production](./docker-compose.prod.yml)
and will check for an image updates automatically.

