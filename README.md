## ExpressLearning

### This repository can be used to learn basics of Express.

### Building RESTful API using Express

#### Express is fast and light weight framework for building web applications.

#### RESTful Services or RESTFul API

#### REST == Representational State Transfer. REST is basically a convention to build these services.

#### CRUD == Create, Read, Update and Delete

#### vidly app : http://vidly.com/api/customers : this api we will build, customer is called as resource or endpoint in REST term.

#### HTTP methods : GET, POST, PUT, DELETE

##### To get the list of all customers: GET /api/customers : [{id: '1',name:''},{id: '2',name:''},....]

##### To get the single customer : GET /api/customers/1 : {id: '1',name:''}

##### To update any customer data : PUT /api/customers/1 and also includes customer data in the body of the request : {id: '1',name:''}

##### To delete a customer : DELETE /api/customers/1 : {id: '1',name:''}

##### To create a customer : POST /api/customer and should include new customer data in the body of the request. : {id: '',name}

## Introducing Express

#### create package.json using npm i --yes inside ExpressBasics Folder

#### install express using npm i express

### Building Your First Web Server

const express = require('express');

const app = express();
app.get('/', (req, res) => {
res.send('Root Url');
});

app.get('/api/courses', (req, res) => {
res.send(JSON.stringify(["Java", "Spring", "Hibernate"]));
})

app.listen(3000, () => console.log('Listening to the port 3000....'))

### Nodemon : Short form of Node Monitor

##### npm i -g nodemon

### Environment Variables

#### We have hard coded the port number in our application. When we deploy our application is production enviornment the port is assigned by the production system. To fix this issue we need to use the environment variable.

const port = process.env.PORT || 3000;

app.listen(port, ()=>console.log(`Listening on Port ${port}`));

#### How to set env variable in windows using command prompt ?

$env:port=3000

### Route Parameters

app.get('/api/courses/:courseId', (req, res) => {

res.send(req.params.courseId);

});

app.get('/api/posts/:year/:month', (req, res) => {

res.send(req.params);

});

### Query Parameters

#### Query parameters is used to provide optional parameter to the server like sorting and filtering information.

app.get('/api/comments/:year/:month', (req, res) => {

res.send(req.query);

});

#### url : http://localhost:3000/api/comments/2021/Aug?sortBy=name

### Handling HTTP GET request

#### refer courses.js file

### Handling HTTP POST request

#### For handling post request we need to enable parsing of JSON object in the body of the request. So, we need to use app.use(express.json()). This syntax is used to add a piece of middleware . express.json() will return a piece of middleware and app.use method is used to use this middleware in request processing pipeline.

#### POST request without validation : It assumes that request body has the name property

app.post('/api/courses', (req, res) => {

const course = {

id: courses.length + 1,

name: req.body.name

 }

courses.push(course);

res.send(course);

})

### Input Validation

#### Basic input validation can be performed programmatically as given in the below example :

app.post('/api/courses', (req, res) => {

if (!req.body.name || req.body.name.length < 3)

return res.status(400).send('Name is required and it should be more than 3 characters');

const course = {

id: courses.length + 1,

name: req.body.name

}

courses.push(course);

res.send(course);

 })

#### You can use joi npm library for input validation. npm i joi

app.post('/api/courses', (req, res) => {

const schema = Joi.object({

name: Joi.string().min(3).max(30).required()

});

const result = schema.validate({ name: req.body.name });

if (result.error)

return res.status(400).send(result.error.deatails[0].message);
...remaining code.....
})

#### Handling HTTP PUT request

app.put('/api/courses/:id', (req, res) => {

const course = courses.find(c => c.id === parseInt(req.params.id));

if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);

const schema = Joi.object({

name: Joi.string().min(3).max(30).required()

});

const result = schema.validate({ name: req.body.name })

if (result.error) return res.status(400).send(result.error.details[0].message);

course.name = req.body.name;

res.send(course);

})

### Handling HTTP DELETE

app.delete('/api/courses/:id', (req, res) => {

const course = courses.find(c => c.id === parseInt(req.params.id));

if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);

const index = courses.indexOf(course);

courses.splice(index, 1);

res.send(course);

 })
