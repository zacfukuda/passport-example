# Hashing Password & Persistent logged-in

The application stores hashed password and verify it upon log-in using [bcrypt](https://www.npmjs.com/package/bcrypt). By impmenting the persistent session (in MongoDB session store) user can keep them logged-in.

[Go to the official tutorial](https://www.mokuji.me/article/passport-hashing-remember)

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
$ node server.js 
```

> Make sure you have `passport` MongoDB database. If you haven’t, please follow the [Getting started > Database](https://github.com/zacfukuda/passport#database).

## Resources

- https://www.npmjs.com/package/connect-mongo