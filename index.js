const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const courseList = require('./Data/courseList.json')

app.get('/', (req, res) => {
    res.send('Language Courses Portal')
})

app.get('/course-list', (req, res) => {
    res.send(courseList)
})


app.listen(port, () => {
    console.log('Language Courses on port 5000', port)
})

