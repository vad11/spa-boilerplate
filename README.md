![ES Boilerplate logo](https://raw.githubusercontent.com/manuelvulp/es-boilerplate/master/client/assets/images/es-boilerplate.jpg)

### Tech

ES Boilerplate uses the following :
* [Webpack] - Transpiles all the JS from ES2015/2016 to ES5
* [Gulp] - Taskrunner

### Setup

```sh
npm install
cp client/environment.sample.js client/environment.js
gulp
```

Default port is 8080 which can be changed in gulp/webpack.js to desirable one. After running gulp development task, open your browser @ http://localhost:8080/webpack-dev-server/