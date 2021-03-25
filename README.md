# RoR_Test

You can see this project live in this [link](https://605c4d3781f78b947afb95cc--inspiring-almeida-d22374.netlify.app/)

Here you can see the [Documentation](https://documenter.getpostman.com/view/13154203/TzCHCW6c#485e6f24-50b8-44c5-8a93-ba8f673904db)

##
To set up this web app , you must have Node , Ruby  and PostgreSQL installed in your machine. In the client folder there is code for the interface built with React. And in the server folder is where the API code can be found, the API is built in Ruby on rails and is using PosgrestSQL as database

Installation: 

* go to client folder and use `npm install` to install all packages

* make sure the api.js in the client/src folder , has the correct value in base_url for your API Url

* then start the client by using npm start

* After , go to the server folder and user `bundle install` to install all gems

* migrate the database with `rails db:migrate`

* To startup the API use `rails s`


the application should be running correctly
