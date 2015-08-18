![SPA Boilerplate logo](https://raw.githubusercontent.com/manuelvulp/spa-boilerplate/master/client/assets/images/spa-bp.jpg)

### Tech

Single-Page Application (SPA) Boilerplate uses the following :
* [Webpack] - Transpiles all the JS from ES2015/2016 to ES5
* [Gulp] - Taskrunner

### Way of thinking

Created to be as agnostic as possible. The project **does not** contain any JS framework out of the box intentionally as it should be as easy to drop in any desired framework for development. It does contain some "stock" setup and components though which i've come to use in most of my projects.

### Setup

```sh
git clone git@github.com:manuelvulp/spa-boilerplate.git
cd spa-boilerplate
rm .git
npm install
cp client/environment.sample.js client/environment.js
gulp
```

Default port is **8080** which can be changed in **gulp/webpack.js** to desirable one. After running **gulp default** task, open your browser @ [http://localhost:8080/webpack-dev-server/]

[http://localhost:8080/webpack-dev-server/]: http://localhost:8080/webpack-dev-server/