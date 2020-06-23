const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {logger} = require('./middleware');
const { APP_PORT } = require('./config');

const app = express(); 
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger);


app.use(express.static(__dirname+'/assets'));
app.set('views', __dirname+'/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');


require('./routes/')(app);

app.listen(APP_PORT, () => {
    console.log("App running at port 3000");
    
});