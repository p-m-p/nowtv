##Installation
To install clone this repository and run `npm install`.

To run the acceptance tests you will need to have ruby and the bundler gem
installed to `bundle install`. The acceptance tests also require the
phantomjs-1.9.8 binary to be present in your path.

##Running the application
The application is currently only setup for development. `npm start` will
start a webpack development server with Hot Module Replacement running at
[http://localhost:8080](http://localhost:8080).

##Running the tests
I have added unit tests for the CallCharges and Money components with an
acceptance test for the call charges display toggle. Unit tests are located
in the `__tests__` folder inside of the commponent directories.

To view the unit test results run `npm test`.

To view the acceptance tests result you will have to start the webpack dev
server `npm start` before running `cucumber` from another shell. I would have
added a rack or express app to serve the index page given more time.

##Technologies
The main application is built with React.js and Redux using Webpack and Babel
for the development processes.

For unit testing I have used mocha, chai, sinon and the React test utility
addons. Tests are run with Karma.

For the acceptance tests I have used cucumber, capybara and rspec.

##TODO
Given more time I would have

- Added propType declarations to components
- Improved the page design
- Added Unit tests for all components
- Configured Webpack for production builds
- Added additional acceptance tests with rack server to serve prod bundle
