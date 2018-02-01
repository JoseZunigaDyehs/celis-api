'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 7000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/celis-api', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log('la base de datos ha sido cargada');
        app.listen(port, function(){
            console.log('servidor del api rest escuchando en http://localhost:' +port);
        })
    }
});