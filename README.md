For running tests on your local machine the following steps should be fulfilled:

1. Install Node.js (https://nodejs.org/en/)
2. Install packages that are specified in package.json file by using "npm i" command in your terminal. Hence, after the packages successful installation node_modules folder and package-lock.json file will appear in the project. 
3. For running a specific test:

- write a path in "specs" property that can be found in wdio.conf.js (it's a path to a file with .feature extension)
- write a path in "require" property of "cucumberOpts" object in wdio.conf.js (it's a path to a file with steps implementation)

4. Execute "npm test" to run a test/tests specified in wdio.conf.js


  