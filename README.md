# Authentication with [passport.js](http://www.passportjs.org/)

This repository contains the codes of sample appliations which deal with authentication using [passport.js](http://www.passportjs.org/), authentication middleware for Node.js.

The codes are slit into four parts:

- [01-basic](https://github.com/zacfukuda/passport-example/tree/master/01-basic)
- [02-mongo-signup](https://github.com/zacfukuda/passport-example/tree/master/02-mongo-signup)
- [03-hashing-remember](https://github.com/zacfukuda/passport-example/tree/master/03-hashing-remember)
- [04-jwt-react](https://github.com/zacfukuda/passport-example/tree/master/04-jwt-react)

For `01-basic`, `03-mongo-signup`, and `03-hashing-remember`, the applications use [passport-local](https://github.com/jaredhanson/passport-local) module, which authenticates users with username and password. For `04-jwt-react`, the application uses [passport-jwt](https://www.npmjs.com/package/passport-jwt) to show how to implement authentication prgoram with passport.js in the front-end development.

[JSON Web Token](https://jwt.io/) is a industry standard RFC 7519 method, that is intended to be used to secure RESTful endpoints.

## Official Tutorials

The official tutorials by the developers are available on his blog.

- [Part 1. Basic](https://www.mokuji.me/article/passport-basic)
- [Part 2. MongoDB & Sign-up](https://www.mokuji.me/article/passport-mongo-signup)
- [Part 3. Hashing & Remember me](https://www.mokuji.me/article/passport-hashing-remember)
- [Part 4. JWT & React.js](https://www.mokuji.me/article/passport-jwt-react)

## Prerequisites

In order to run the applications, you must have followings (inside the round brackets are the versions of software tested):

- [Node.js](https://nodejs.org/en/) (10.15.0)
- [MongoDB Community Server](https://docs.mongodb.com/manual/administration/install-community/) (4.0.9)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- (Yarn)

> If you haven’t installed Yarn on your computer, please replace `yarn` with corresponding `npm` or `npx` commands.

## Getting started


To run the applications, please either clone the repository with Git or download the zip file.

```
$ git clone https://github.com/zacfukuda/passport-example.git
```

### Database

From `02-momngo-signup` upon, the applications use MongoDB to store user information.

While running the applications, please make sure you are running MongoDB.

```bash
$ mongod

# You might need to specify the config file
$ mongod --config /usr/local/etc/mongod.conf
```

The applications are built to usea a MongoDB database named `passport`. Database name is declared in the `server.js` of each directory—except `01-basic` since it doesn’t use DB. If you don’t want to or cannnot use `passport` as a database, please update the declaration on your own.

Please make a database called `passport` on the Mongo shell.

``` bash
> use passport;
> db.foo.insert({foo: 'bar'});
> exit;
```

> Simply running `use passport` doesn’t create a new database. So, you need to insert a dummy document to it.

### Application

The below is how to run the `01-basic` application using Git and Yarn.

``` bash
$ cd passport-example/01-bacis
$ yarn

$ node server.js
# Or if you have nodemon globally installed...
$ nodemon server.js
```

Besides `04-react app`, the server runs at [localhost:3000](http://localhost:3000). For `04-react app`, the React.js application will be run at `port:3000` and API server at `port:4000`.

## Note

The applications have no regard on UI/UX, even nelecting the error handling such as when one user inputs wrong password. Error handling is beyond the scope of these samples and leaving it to readers to come up their knowledge on their own.