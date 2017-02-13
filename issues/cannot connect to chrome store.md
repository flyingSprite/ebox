
After `npm run dev`, got error message:

```shell
webpack: bundle is now VALID.
Failed to fetch extension, trying 4 more times
Failed to fetch extension, trying 4 more times
Failed to fetch extension, trying 3 more times
Failed to fetch extension, trying 3 more times
Failed to fetch extension, trying 2 more times
Failed to fetch extension, trying 2 more times
Failed to fetch extension, trying 1 more times
Failed to fetch extension, trying 1 more times
Failed to fetch extension, trying 0 more times
Failed to fetch extension, trying 0 more times
{ Error: ETIMEDOUT
    at Timeout._onTimeout (/Users/Fernando/Develop/solutions/electron-react-boilerplate/node_modules/request/request.js:813:19)
    at tryOnTimeout (timers.js:232:11)
    at Timer.listOnTimeout (timers.js:202:5) code: 'ETIMEDOUT', connect: true }
```
That is mean cannot connect to Chrome Store. [See here](https://github.com/chentsulin/electron-react-boilerplate/issues/268).(被墙了)
