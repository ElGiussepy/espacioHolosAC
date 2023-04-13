
import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
const app = express();

// Configuramos el motor de plantillas de express-handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

// Configuramos la ruta donde se encuentran las vistas

app.set('views', './src/views');
app.get('/', (req, res) => {
  res.render('layouts/main');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
