# Implementing MongoDB and Sing-up Form

User information is stored in MongoDB, through [Mongoose](https://mongoosejs.com/) model. and the application has a sing-up form so that users can register from browsers, forcing them logged-in as they sign up.

[Go to the official tutorial](https://www.mokuji.me/article/passport-mongo-signup)

> At this version, the application don’t hash password, saving it as it is input—which is highly dangerous. Also, sessions will disappear as the browser gets closed or the application restarts. These issuses are cover in [03-hashing-remember](https://github.com/zacfukuda/passport/tree/master/03-hashing-remember).

## Getting started

Run the application as follows:

```bash
# On one Terminal window
$ mongod
# or
$ mongod --config /usr/local/etc/mongod.conf

# On another window
$ cd pass/to/passport-example/02-mongo-signup
$ yarn
$ node server.js 
```

> Make sure you have `passport` MongoDB database. If you haven’t, please follow the [Getting started > Database](https://github.com/zacfukuda/passport#database).