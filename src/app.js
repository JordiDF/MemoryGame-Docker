// Jorge Diest (IFCD02010 | UF1846)

// Configuración del servidor

// Importación del paquete express
const express = require('express');

// Importación del paquete morgan
const morgan = require('morgan');

// Creación de una nueva instancia de express
const app = express();

// Configurción de express para que use el directorio public como directorio por defecto
app.use(express.static('./public'))

// Configuración de morgan para que use las opciones de desarrollador
app.use(morgan('dev'));

// Importación de las rutas del servidor
app.use(require('./routes/routes.js'));

// Exportación de la app
module.exports = app;