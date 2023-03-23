const express = require('express');
require('dotenv').config({path: "./config/.env"})
const cors = require('cors');
const app = express();
const port = process.env.PORT;

require('./config/mongoose.config');

app.use(cors(), express.json(), express.urlencoded({ extended: true })); 

require('./routes/products.routes')(app);
app.listen(port, () => {
    console.log("Listening at Port", port)
})