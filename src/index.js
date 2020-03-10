
const path = require('path');
const express = require('express');
const app = express();




//settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));




//importing routes
const indexRoutes = require('./routes/index');



//routes
app.use('/', indexRoutes);



// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});