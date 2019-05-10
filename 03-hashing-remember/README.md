# Hashing Password & Persistent logged-in

To be more and more practical, this version of app stores hashed password and verify it upon log-in using [bcrypt](https://www.npmjs.com/package/bcrypt). In addition, in order to make users logged in persistently, the app stores sessions in—in this case—MongoDB.

## Getting started

Run the application as follows:

```bash
# On one window
$ mongod
# or
$ mongod --config /usr/local/etc/mongod.conf

# On another
$ yarn
$ node server.js 
```

> Make sure you have `passport` MongoDB database.