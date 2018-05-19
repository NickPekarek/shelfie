const express = require('express');
const bodyParser = require('body-parser');
const DB = require('./controller.js')
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');
const cors = require('cors')
const serve   = require('express-static');

const app = express();
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance) ;
});



app.use( bodyParser.json() );
app.use(cors())
app.use( express.static( __dirname + "/../src") );


app.get('/api/inventory', controller.getInventory);
app.post("/api/product", controller.create);
app.delete("/api/product/:id", controller.delete);
app.put("/api/product/:id", controller.update);
app.get("/api/product/:id", controller.getProduct)


const port = process.env.PORT || 4000
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );