# Getting started

This project was created with Create React App, made for testing some USWDS
features.

1. Run `npm install`
1. Run `npm start`

Testing branch for
[`uswds/uswds/alpha-esm--components`](https://github.com/uswds/uswds/pull/5091).

## How to test

1. Go to branch on USWDS, run `npm link`
2. Go to this project and run `npm link @uswds/uswds`
3. Run project via `npm start`
4. Visit `src/components/usa-accordion.js` for component imports
5. Accordion **should** expand and collapse with following two methods:
6. Destructuring:

   ```js
   import USWDS from "@uswds/uswds/js";
   const { accordion } = USWDS; // deconstruct your components here
   ```

7. Standard import:

   ```js
   import accordion from "@uswds/uswds/js/usa-accordion";
   ```
