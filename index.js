// index.jsc
const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(

    `<h1>Cafè Palmanova</h1>
    <p>Esment Alimentació</p>
    <img src="/img.jpg" alt="Cafè Palmanova" width="300">`

  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

