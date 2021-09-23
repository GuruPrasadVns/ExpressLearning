# In this Section we will look into the advance topics of Express such as

## Middleware

## Configuration

## Debugging

## Templating Engines

### Middleware

### One of the core concepts of Express is the concept of middleware or middleware function.

### A middleware is a function that takes a request object and either return response to the client or passes control to the other middleware function.

### The first example of middleware function is the route handler function i.e. (req,res)=>{}

### The second example is express.json() which returns a middleware function. The job of this middleware function is to read the request and if there is any JSON object in the body of the request it will parse the body of the request to an JSON object and then it will set the req.body property.

### Request Processing Pipeline

#### Request ----------------> one or middleware functions------------------>Response. In our current implementation there are two middleware function.

### Express includes some inbuilt middleware functions but we can also create our own middleware functions. With these custom middleware functions we can implement cross cutting concerns like logging, authentication, authorization and so on.

### So any express application is nothing but a bunch of middleware functions.

## Creating Custom Middleware

#### app.use((req, res, next) => {

#### console.log('Logging.....');

#### next();

#### })

#### app.use((req, res, next) => {

#### console.log('Authenticating.....');

#### next();

#### })

### Middleware functions always called in sequence in which they are declared. As a convention you should create separate file for each middleware function.

## Built In Middleware

### express.urlencoded() : to remove deprecated warning use express.urlencoded({extended: true}) With this declaration we can also parse array and complex object. But this approach is tranditional and generally not used.

### express.static('public') : This in built middleware is used to serve the static resources. public is the name of the folder which contains the static resources.

## Third Party Middleware

### The url for all the third party middleware : http://expressjs.com/en/resources/middleware.html

### Every middleware will impact on performance of your application.

#### helmet : Helps secure your apps by setting various HTTP headers.

#### morgon : HTTP request logger.

# Environments

### process.env.NODE_ENV is used to determine the environment. If it is not set this will give undefined.

### Another way to get the environment is app.get('env') whichi internally used NODE_ENV variable to get the environment.If NODE_ENV is not set it will return by default development.

## Write a program to enable morgan logging only in the development envrionment.

# Configuration

## The popular library to manage application configuration is rc.

## The library which we used in the application is config. npm i config

## To use this config library create a folder named config and then create default.json file in that. default.json contains the default setting of your application for example name of your application.

### {

### "name" : "My Express App"

### }

## For development environment you need to create development.json file. In this file we can override the properties defined in default.json and additonaly we can add extra properties as well.

### {

### "name" : "My Express App - Development",

### "mail" : {

### "host" : "dev-mail-server"

### }

### }

## Similarly for production you can create production.js file.

### {

### "name" : "My Express App - Production",

### "mail" : {

### "host" : "prod-mail-server"

### }

### }

## To use the configuration in any file

### const config = require('config')

### console.log(`Application Name : ${config.get('name')}`)

### console.log(`Application Mail Server : ${config.get('mail.host')}`)

## Now set the envrionement variable NODE_ENV to development or productin and you will get the respective values.

## You should not store your application secrets in these config files like database password or mail host password. We need to save these secrets in environment varialbes.For example,

#### to store the password of database create environment variable like <application*name>*<variable_name> = value

##### export or set app_password = 1234

#### So, In development environment we can manually set these kind of environment variables and in production environments we have the configuration panel to set these variables. And then we can read the using our config module.

## To read evironment variables you need to create one file named custom-environment-variables.json(double check the name of the file). In this file we define mapping of configuration setting to env variables.

### {

### "mail" : {

### "password" : "app_password"

### }

### }

### in the application you can get console.log('Mail Password', config.get('mail.password'));

# Debugging

## For debugging purpose we can use debug package of Node. We can replace all our console.log statement with debug and later we can use environment variable to enable of disable debugging. So, in this way we don't have to modify or comment out our code for debugging purpose. Moreover, we can also control the level of debugging information we want to see for example, We want to see debugging inforamtin only related with the database.

### npm i debug

### const startupDebugger = require('debug')('app:startup')

### const dbDebugger = require('debug')('app:db')

### console.log('Morgan enbaled..') statement can be replaced with startupDebugger('Morgan enbaled..')

### for database related statement we can replace like dbDebugger('Connected to the database.....')

## set environment variable DEBUG=app:startup and start the application you will get the debugging statement related with the app:startup

## to disable the debugging information set DEBUG=<nothing>.

## To set multiple debug statement set DEBUG=app:startup,app:db or using wildcard DEBUG=app:\*

## Another way to set the debuggin information is at the time of running your application : DEBUG=app:db nodemon index.js

# Templating Engines

## All the end points we have implemented so for is returned json to the client. But sometimes, we need to return the html mockpus to the client that is when we can use templating engines.

## There are several templating engines available for express applications but most popular are pug,mushtache and EJS. Each templating engines have different syntax to generate dynamic html.

### npm i pug

### In our application we need to set the view engine using app.set('view engine','pug'). When express see this syntax it will internally load the pug module we don't have to specify using require function. Second setting which is optional used to specify the path of the views and default will be './views' so the declaration is app.set('views','./views')

### Create a folder views and inside that create a file called index.pug

#### html

#### head

#### title=title

#### body

#### h1=message

### In end point response we can use the following

#### app.get('/api/courses', (req, res) => {

#### res.render('index',{title: 'My Express App',message: 'Hello'});

#### });

## Database Integration

### Go to the url for details : http://expressjs.com/en/guide/database-integration.html
