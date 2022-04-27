# AngularDashboard (https://github.com/SunilSalaria/angularapplication-dashboard.git)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


=======================================

FOR SET LOCAL DB API IN ANGULAR:-
-----------------------------------------------
# GO TO https://www.npmjs.com/package/json-server URL and run "npm i json-server" command in project root folder. (npm i json-server)
# GO TO https://www.npmjs.com/package/concurrently URL and run "npm i concurrently" command in project root folder. (npm i concurrently)
# GO TO "D:\Workspace\Angular\Angular-local-api\angular-dashboard\package.json" this file path in angular project and add line number 10,11 (below test)

      - "json-server": "json-server --watch db.json --port 3000",
      - "start-dev": "npm run json-server \"ng-serve --o\""
# create local DB file (db.json) in project root folder. create object {"user": [ add value https://jsonplaceholder.typicode.com/users ]}

# then run "npm start-dev" in your terminal and your project will run.

    - localhost for local db http://localhost:3000/user
    - localhost 4200 for angular changes.


=============================================================================

# for toast in angular
- https://www.tutsmake.com/angular-13-toastr-notifications-example/
# for login password
- https://stackoverflow.com/questions/45300614/redirect-to-another-page-angular-2
# for sweet alert
- https://www.itsolutionstuff.com/post/angular-9-8-sweetalert2-sample-example-tutorialexample.html

# for pagination
- https://www.positronx.io/angular-server-side-pagination-with-ngx-pagination-example/ (server side pagination)
- https://codingspoint.com/how-to-make-server-side-pagination-in-angular-13/ (client side pagination)
- https://www.itsolutionstuff.com/post/angular-13-server-side-pagination-exampleexample.html (client side pagination)