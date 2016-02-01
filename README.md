# myLib
Creating my first library for node.js

#Description

Currently my webserver is in the same repo as my module.
'npm publish' will only push what's necessary for the module itself by using .npmignore.

**DevDependencies in use**:
- chai & mocha: Unit testing the module. Currently 4 tests are present.
- istanbul: Gives code coverage and currently it needs to be 100%.
- codecov: Creates codecoverage reports at https://codecov.io/github/progvar/myLib. Also has a Chrome plugin to use on Github.
- comittizen & cz-conventional-changelog: Creating detailed commits.
- ghooks: Adding pre & push commit tasks and needs.
- babel: Adding  ES6 support for older browsers. The transpiled ES5 scripts are in the dist folder.
