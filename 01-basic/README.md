# Basic Authentication

Basic username/passpowrd authentication using passport.js and passport-local strategy. The user information is stored(defined) in the `./db/users.js`.

[Go to the official tutorial](https://www.mokuji.me/article/passport-basic)

## Getting started

Run the application as follows:

```bash
$ cd pass/to/passport-example/01-basic
$ yarn
$ node server.js
```

Visit [localhost:3000](http://localhost:3000)—which redirects you to `/login`, and then login with the username/password combination of `jack/secret` or  `jill/birthday`.

## Reference

- http://www.passportjs.org/docs/
- http://www.passportjs.org/packages/passport-local/
- https://github.com/jaredhanson/passport-local/
- https://github.com/passport/express-4.x-local-example
- https://github.com/expressjs/express/tree/master/examples/auth
- https://github.com/jaredhanson/connect-flash
