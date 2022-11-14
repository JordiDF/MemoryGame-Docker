// Jorge Diest (IFCD02010 | UF1846)

// Importación y activación del servidor
const app = require('./app.js')

// Configuración del puerto del servidor
const PUERTO = process.env.PORT || 3000;

// Activación del servidor
app.listen(PUERTO, () => console.log(`Server running in port ${PUERTO}`));