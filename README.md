Angular2 Material Design App with TypeScript and Gulp
==================================================================

Small Angular2 application with Gulp as build system, using Google Material Design project for the UI compoents.

#### Prerequisites

*nodejs* must be installed on your system and the below global node packages must be installed:

- gulp

> npm i -g gulp

- gulp-cli

> npm i -g gulp-cli

- typings

> npm i -g typings@1.3.3

- typescript

> npm i -g typescript@2.0.2

- ts-node

> npm i -g ts-node@1.3.0

- angular-cli

> npm i -g angular-cli

#### Cloning the repository

Clone the repository:

> git clone https://github.com/khinds10/Angular2-Material-Gulp-Typescript

Navigate to `Angular2-Material-Gulp-Typescript` directory:

> cd Angular2-Material-Gulp-Typescript

#### Installing dependencies

Install dependencies by running the following command:

> npm install

`node_modules` and `typings` directories will be created during the install.

#### Building the project

Build the project by running the following command:

> npm run clean & npm run build

`build` directory will be created during the build

#### Starting the application

Start the application by running the following command:

> npm start

The application will be displayed in the browser.

Resources
---------

- [A step-by-step tutorial](http://blog.codeleak.pl/2016/03/quickstart-angular2-with-typescript-and.html)

## Project File Structure and Setup

>	Angular2-Material-Gulp-Typescript

>	|   .gitignore

>	|   bs-config.json  	-> BrowserSync configuration

>	|   gulpfile.ts     	-> Gulp in TypeScript

>	|   package.json    	-> npm configuration

>	|   tsconfig.json   	-> TypeScript configuration

>	|   typings.json    	-> TypeScript typings definitions

>	|   tslint.json     	-> tslint configuration

>	|

>	\---src

>	│   │   index.html               -> Starting point for the application

>	│   │   systemjs.config.js       -> SystemJS configuration

>	│   │

>	│   \---app                         -> Application modules

>	│       │   app.component.ts        -> Main application component

>	│       │   app.html              	-> Main application template 

>	│       │   app.module.ts         	-> Application module definition

>	│       │   app.routing.ts        	-> Routing configuration

>	│       │   main.ts               	-> Application bootstrap

>	│       │

>	│       \---about 

>	│       │   └───components

>	│       │           about.components.ts

>	│       │           about.html

>	│       │

>	│       \---todo

>	│           ├───components

>	│           │       task-list.component.ts

>	│           │       task-list.css

>	│           │       task-list.html

>	│           │       task.component.ts

>	│           │       task.html

>	│           │

>	│           \---models

>	│           │       task.ts

>	│           │

>	│           \---services

>	│                   task-service.ts
