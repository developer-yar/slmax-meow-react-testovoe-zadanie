## What does this application do?

The application uses the JSON Server library to emulate an interaction with Backend and the Incremental Static Regeneration (ISR) approach in order to desmonstrate how it works.

## How to check that everything works correctly?

To make sure that the application works as it is expected according to the requiments, open the products page or a page with any product. Then you need to change something in the `db.json` file and reload the page with all products or your opened page with a product. You will notice changes on the page. Then try to change something again in the `db.json` file and reload the page several times within 15 seconds until you will notice your latest changes displayed on the site.

## How to launch?

To run the application at first enter in a terminal `npx json-server db.json` to run a fake API service and then enter `npm run start` for launching the Next.js server.
