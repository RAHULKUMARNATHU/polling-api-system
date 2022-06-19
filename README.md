# Polling-Api-System
Description :
1. We can create question.
2. We can delete Question.
3. We can view question
4. We can create option for question
5. We can delete option
6. we can vote to particular option for a particular Question .
***

## Requirements
For development, you will only need Node.js and a node global package installed in your environement and mongodb for database.

### Node
* Node Installtion on Windows
  Go on to the [official Node.js website](https://nodejs.org/en/) and download the installer. Also, be sure to have `.git`  available in your PATH,
  `npm` might need it (You can find [git](https://git-scm.com/)).
  
 * Other operating System
   You can find more information about the installation on the official [Node.js website](https://nodejs.org/en/) and the official [NPM website](https://www.npmjs.com/).
  
  If the installation was successful, you should be able to run the following command.
  ```
  $ node --version
 

  $ npm --version
  
 ```
 
 If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.
 ```
 $ npm install npm -g
 
 ```
 ---

## Install

```
$ git clone https://github.com/RAHULKUMARNATHU/polling-api-system
$ cd polling-api-system
$ npm install
```
## Configuration
Open ```a/nice/path/to/a.file``` then edit it with your settings. You will need:
* A setting
* one more setting
* Another one more setting

## Run the project

```
$ npm start

```

## API's

* Create Question :-
``` localhost:8000/api/v1/questions/create/ ```

* Create Option :-
``` localhost:8000/api/v1/options/:id/options/create/ ```

* View Question :-
``` localhost:8000/api/v1/questions/:id/ ```

* Delete Option :-
``` localhost:8000/api/v1/options/:id/delete ```

* Delete Question :-
``` localhost:8000/api/v1/questions/:id/delete ```
