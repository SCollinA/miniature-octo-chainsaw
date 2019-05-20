require('dotenv').config()
import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import bodyParser = require('body-parser');
const MongoDBStore = require('connect-mongodb-session')(session)
mongoose.connect(
    'mongodb://localhost:27017/ts-express-demo',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
);
export const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/ts-express-demo',
    collection: 'sessions'
});

export const app = express();  
app.use(session({ 
    secret: 'superSecret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store,
    resave: false,
    saveUninitialized: true,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('build'))  
app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send('hello world!')
}) 

app.listen(process.env.PORT, () => 
console.log(`TypeScript-Express app listening on port ${process.env.PORT}!!`))