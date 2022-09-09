# Klaro and Vite 

This example shows how to import and use Klaro as a node module via Vite.

## Setup for dev

Make sure you run `npm run build` (**in the main Klaro directory**) to generate the required distribution files in the `dist` directory that this example will try to import.
You can use your local node installation or the docker containers provided with this project.
Complete any of the two variants described below to run the dev server.
You can then go to `localhost:5173` and should see the Klaro consent manager with a very simple configuration.

### Using local node

* Run `npm install` to install the dependencies
* Run `npm run dev` to set up the dev server

If you want to build for production, run `npm run build`.

### Using docker compose

* Run `docker compose up npm` to install the dependencies
* Run `docker compose up` to start the dev server

If you want to build for production, run `docker compose run npm run build` (sic!).
You can customize the node version being used by modifying `NODE_VERSION` in `./.env`.

