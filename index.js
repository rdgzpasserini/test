// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Node.js en Render!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

console.log('¡Hola Mundo desde Node.js!');