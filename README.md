# Ionic Angular Material starter app

## Usage

```
    # From the Ionic website:
    # First, install Node.js. 
    # Then, install the latest Cordova and Ionic command-line tools. Follow the Android and iOS 
    # platform guides to install required platform dependencies. 
    # Windows users: we strongly recommend Visual Studio Community for 
    # development which comes with everything you need.


    $ npm install -g cordova ionic

    # Then start an Ionic project from this repo:
    $ ionic start myApp https://github.com/jouke/ionic-ngmaterial-startapp

    # install all node dependencies
    $ npm install

    # open the project in your browser
    $ ionic serve
```

## Description

I'm starting to learn [Ionic](http://ionicframework.com/getting-started/), and was impressed by the YouTube demo of [Angular Material](https://t.co/uAuAwPYYYs). I decided my next project was going to be based on that. Next, I stumbled upon a great [blogpost](https://medium.com/@kyleledbetter/getting-started-with-angular-material-3ee3cdb8ecd8) by Kyle Ledbetter. It was a great getting started, but the code example just didn't fit the way I like to work with [AngularJS](https://www.angularjs.org/). 

I combined a starter app from Ionic with Kyle's code, and started fiddling until it felt better like "my" project. It's still not done, and I will continue to work on this starter app. For now it at least conforms to these princples:

* Use Angular's `controllerAs` syntax
* Every JS file is contained in an [IFFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
* Use of [ui-router](https://github.com/angular-ui/ui-router)'s nested views
* a clear directory and file structure like so:

```
app
 |-component1
 | |-component1.controller.js
 | |-component1.html
 |-component2
 | |-component2.controller.js
 | |-component2.html
 |-app.js
 |-routes.js
 ```
## Feedback

Feedback is very welcome. Please contact me on Twitter: [@joukevisser](https://twitter.com/joukevisser)

## Author
Jouke Visser <jouke@joukevisser.com>

## Credits

Heavily based on [the work of Kyle Ledbetter](http://codepen.io/kyleledbetter/pen/gbQOaV)

## License

MIT
