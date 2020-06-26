const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  logger,
  auth
} = require('./middleware');
const {
  APP_PORT,
  DB_URL
} = require('./config');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(logger);
// app.use(auth);

//Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to database")

}).catch(
  err => console
)

app.use(express.static(__dirname + '/assets'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


require('./routes/')(app);


app.listen(APP_PORT, () => {
  console.log("App running at port 3000");

});