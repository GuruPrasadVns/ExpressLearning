const express = require('express');
const app = express();

const courses = require('./courses');
const logging = require('./middleware/logging')
const auth = require('./middleware/authentication')

//middle ware to parse JSON object inside the request
app.use(express.json())

app.use(logging)

app.use(auth);

app.use('/api/courses', courses);

//Middleware always called in sequence

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));