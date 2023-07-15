const express = require('express')
const app = express()

require('dotenv').config()
app.use(express.json())
const port = process.env.PORT || 5000

const dbConfig = require('./config/dbConfig')
const usersRoute = require("./routes/usersRoute");
const projectsRoute = require("./routes/projectsRoute");
const tasksRoute = require("./routes/tasksRoute");

const path = require("path");
__dirname = path.resolve();

app.use("/api/users", usersRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}

app.listen(port, () => console.log(`Node server listening on port ${port}`))

