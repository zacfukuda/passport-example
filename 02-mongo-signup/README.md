# Implementing MongoDB and Sing-up Form

To be more practical, the application stores user information in MongoDM, through [Mongoose](https://mongoosejs.com/) model. In addition, it has a sing-up form so that users can register the app on browsers, making them logged-in as they sign-up.

At this version, the application don’t hash password, saving it as it is input—which is highly dangerous—and the logged-in session will disappear as the browser gets closed or the application restarts. These techniques are cover in [03-hashing-remember](../03-hashing-remember).

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