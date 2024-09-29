import express from 'express';
import bodyParser from 'body-parser'
const app = express();
import { sequelize } from './database/config/dbconfig.js';
import { Player } from './database/model/player.js';
import { router } from './routes/players.js';



// const cors = require('cors');
// some middleware settings
// app.use(cors());

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Player routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

// Crud Routes
app.use('/api', router);

//error handling
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

// Port
const PORT = process.env.PORT || 5000;

// Connection
async function assertDbConnection() {
    try {
      await sequelize.authenticate();
    } catch (error) {
      console.log(error);
    }
}

// App init
async function init() {
    try {
        await assertDbConnection();
        await sequelize.sync({ force: false }); // Make sure it set to false after first run.
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}

// Bootstap app
init()