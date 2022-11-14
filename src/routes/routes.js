// Jorge Diest (IFCD02010 | UF1846)

// Rutas del proyecto

// Importación del objeto Router del package express
const {Router} = require('express');

// Creación de una nueva instancia de Router
const router = Router();

// Configuración de la ruta por defecto
router.get('/', (req,res) => {
    res.sendFile('./public/index.html');
});

// Exportación del router
module.exports = router;