# Nova Dynamics ESLint Configuration Base

To use in your repo:
```bash
npm i -D eslint @novadynamics/eslint-config-base
```
Then create a file called `eslint.config.js` in the root which looks something like:

```js
module.exports = [
    ...require("@novadynamics/eslint-config-base")
    /**
     * {
     *      // Any other rules here
     * }
     */
];
```
