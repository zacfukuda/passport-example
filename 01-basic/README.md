# Basic Authentication

Basic username/passpowrd auth application using passport.js and passport-local strategy. The user information is stored(defined) in the `./db/users.js` 

## Getting started

Run the application as follows:

```bash
$ cd pass/to/01-basic
$ yarn
$ node server.js
```

Visit [localhost:3000](http://localhost:3000)—which redirects you to `/login`, and then login with username/password combination of `jack/secret` or  `jill/birthday`.

## Reference

- http://www.passportjs.org/docs/
- http://www.passportjs.org/packages/passport-local/
- https://github.com/jaredhanson/passport-local/
- https://github.com/passport/express-4.x-local-example
- https://github.com/expressjs/express/tree/master/examples/auth