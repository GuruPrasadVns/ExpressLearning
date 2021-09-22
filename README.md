# ExpressLearning

## This repository can be used to learn basics of Express.

## Building RESTful API using Express

### Express is fast and light weight framework for building web applications.

### RESTful Services or RESTFul API

#### REST == Representational State Transfer. REST is basically a convention to build these services.

#### CRUD == Create, Read, Update and Delete

#### vidly app : http://vidly.com/api/customers : this api we will build, customer is called as resource or endpoint in REST teerm.

#### HTTP methods : GET, POST, PUT, DELETE

##### To get the list of all customers: GET /api/customers : [{id: '1',name:''},{id: '2',name:''},....]

#### To get the single customer : GET /api/customers/1 : {id: '1',name:''}

#### To update any customer data : PUT /api/customers/1 and also includes customer data in the body of the request : {id: '1',name:''}

#### To delete a customer : DELETE /api/customers/1 : {id: '1',name:''}

#### To create a customer : POST /api/customer and should include new customer data in the body of the request. : {id: '',name}

# Introducing Express

### create package.json using npm i --yes inside ExpressBasics Folder

### install express using npm i express

## Building Your First Web Server

#### const express = require('express');

#### const app = express();

#### app.get('/', (req, res) => {

#### res.send('Root Url');

#### });

#### app.get('/api/courses', (req, res) => {

#### res.send(JSON.stringify(["Java", "Spring", "Hibernate"]));

#### })

#### app.listen(3000, () => console.log('Listening to the port 3000....'))
