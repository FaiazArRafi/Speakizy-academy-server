const express = require('express')
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const courses = require('./Data/courses.json')


app.get('/', (req, res) => {
    res.send('Language Courses Portal')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})


app.listen(port, () => {
    console.log('Language Courses on port 5000', port)
})

