const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Root Url');
});

app.get('/api/courses', (req, res) => {
    res.send(JSON.stringify(["Java", "Spring", "Hibernate"]));
})

app.listen(3000, () => console.log('Listening to the port 3000....'))