require( 'dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

//crear servidor express
const app = express();

// configurar CORS
app.use(cors());



// base de datos
dbConnection();

console.log( process.env)

// zN7pd8kp5Y0Fo2xs
//lissetvargas
//rutas
app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'hola mundo'
    });

});

app.listen( process.env.PORT, () => { //el 3000 quiere decir el local host que vamos a trabajar

    console.log('Servidor corriendo en puerto' + process.env.PORT)
});
