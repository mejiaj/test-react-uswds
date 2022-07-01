# Getting started

This project was created with Create React App, made for testing some USWDS features.

1. Run `npm install`
1. Run `npm start`

## Testing USWDS Core

There are currently two react components available:

- `uswds-core-js.js`
- `uswds-styles.js`

These are stateless components that showcase using uswds-core styles **and** scripts.

## Changes in USWDS-Core

When SASS was the single entry point, we could use SASS like this:

```scss
@use "@uswds/uswds-core" as *;
```

But now that uswds-core's package.json has multiple entrypoints, we need to do:

```scss
@use "@uswds/uswds-core/sass" as *;
```

We _could_ set the default entrypoint back to "_index.scss". This makes sense since USWDS-Core is for core styles. We could also move the utils to `uswds-utilities`. Leaving it as-is for now.
