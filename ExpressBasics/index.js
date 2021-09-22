const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Root Url');
});

app.get('/api/courses', (req, res) => {
    res.send(JSON.stringify(["Java", "Spring", "Hibernate"]));
})

app.get('/api/courses/:courseId', (req, res) => {
    res.send(req.params.courseId);
});

app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.params);
});

app.get('/api/comments/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on Port ${port}`));