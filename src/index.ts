import mongoose from 'mongoose';
import session from 'express-session';
const MongoDBStore = require('connect-mongodb-session')(session)
mongoose.connect(
    'mongodb://localhost:27017/ts-express-demo',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
const store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/ts-express-demo',
    collection: 'sessions'
})

const configurations = {
    production: { ssl: false, port: 4000, hostname: 'localhost' },
    development: { ssl: false, port: 4000, hostname: 'localhost' }
}

const environment = process.env.NODE_ENV || 'production'
const config = configurations[environment]
