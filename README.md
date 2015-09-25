![SPA Boilerplate logo](https://raw.githubusercontent.com/manuelvulp/spa-boilerplate/master/www/assets/images/spa-bp.jpg)

### Tech

Single-Page Application (SPA) Boilerplate that uses Webpack and npm scripts for building the application.

### Way of thinking

Created to be as agnostic as possible. The project **does not** contain any JS framework out of the box intentionally as it should be as easy to drop in any desired framework for development. It does contain some "stock" setup and components though which i've come to use in most of my projects.

### Setup

```sh
git clone https://github.com/manuelvulp/spa-boilerplate.git
cd spa-boilerplate
rm -rf .git
npm install
cp www/environment.sample.js www/environment.js
npm run development
```

Default port is **8080** which can be changed in **package.json scripts** to desirable one. After running **npm run development** task, open your browser @ [http://localhost:8080]

[http://localhost:8080]: http://localhost:8080