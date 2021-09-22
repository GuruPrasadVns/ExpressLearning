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
