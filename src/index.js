const express = require('express');
const app = express();
const path = require('path');

//settings 
const port= process.env.PORT || 3000
app.set('port',port);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlawers 

//routes
app.use(require('./routes/index'));

//staric files
app.use(express.static(path.join(__dirname,'public')));

//server
app.listen(app.get('port'),()=>{
    console.log('El servidor se esta ejecutando en el puerto',app.get('port'));
}
)