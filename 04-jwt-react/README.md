# Single Page App Authentication with JWT & React.js


As a single page application, the application issues [JSON Web Token](https://jwt.io/) at the  username/password authentication. The front-end application is built on [React.js](https://reactjs.org/) and [React Router](https://github.com/ReactTraining/react-router) library.

[Go to the official tutorial](https://www.mokuji.me/article/passport-jwt-react)

## Getting started

Run the application as follows:

```bash
# On one Terminal window
$ mongod
# or
$ mongod --config /usr/local/etc/mongod.conf

# On another window
$ cd pass/to/passport-example/03-hash-remember
$ yarn
$ yarn start

# On yet another window
$ cd pass/to/passport-example/03-hash-remember
$ node server.js 
```

> Make sure you have `passport` MongoDB database. If you haven’t, please follow the [Getting started > Database](https://github.com/zacfukuda/passport#database).

## Resources

- https://jwt.io/
- https://github.com/auth0/node-jsonwebtoken
- https://www.npmjs.com/package/passport-jwt
- https://reactjs.org/