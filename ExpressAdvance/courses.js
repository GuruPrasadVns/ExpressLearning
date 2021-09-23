const express = require('express');
const routes = express.Router();
const Joi = require('joi');

const courses = [
    { id: 1, name: 'Learn Core Java' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Node Course' },
    { id: 4, name: 'React Native Basics' },
    { id: 5, name: 'Redux Introduction' }
]

routes.get('/', (req, res) => {
    res.send(courses);
});

routes.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`Course with id ${req.params.id} not found`);
    return res.send(course)
});

// POST request without validation
// app.post('/api/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course);
//     res.send(course);
// })

//POST request with basic validation
// app.post('/api/courses', (req, res) => {
//     if (!req.body.name || req.body.name.length < 3)
//         return res.status(400).send('Name is required and it should be more than 3 characters');

//     const course = {
//         id: courses.length + 1,
//         name: req.body.name
//     }
//     courses.push(course);
//     res.send(course);
// })

//POST request with validation performed with joi library
routes.post('/', (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    });
    const result = schema.validate({ name: req.body.name });
    //console.log(result);

    if (result.error)
        return res.status(400).send(result.error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

//PUT request

routes.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required()
    });
    const result = schema.validate({ name: req.body.name })
    if (result.error) return res.status(400).send(result.error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});

//DELETE request

routes.delete('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`Course with given id ${req.params.id} not found`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
})

module.exports = routes;