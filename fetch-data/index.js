import express from 'express';
import mongoose from 'mongoose';
import Projects from './models/project';
import Future from './models/future';
import cors from 'cors';
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());

const connectionString = `${process.env.MONGODB_URL}`;
mongoose.connect(connectionString,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', () => {console.log('error connecting')});


app.get('/api', (req, res, next) => {
    next();
});

app.get('/api/projects', (req, res, next) => {
    Projects.find((err, value) => {
        if (err) return console.error(err);
        const result = value.map((value) => {
            return [value.name, value.description];
        });
        res.send(result);
    });
});

app.get('/api/future', (req, res, next) => {
    Future.find((err, value) => {
        if (err) return console.error(err);
        const result = value.map((value) => {
            return [value.name, value.description];
        });
        res.send(result);
    });
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({err: err.message});
});

app.use((req, res) => {
    res.status(404);
    res.send({error: "Not found :("});
});

if (require.main === module) {
    app.listen(PORT);
    console.log("Listening on " + PORT);
}
