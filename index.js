// index.jsc
const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(

    `<h1>Cuento del Jinete Loco</h1>
    <h3>Una obra de una tal Sofía.</h3>
    <br><br>
    <p>Hace mucho tiempo, en un pueblo pequeño, vivía un jinete que siempre montaba su caballo a toda velocidad. Todos lo llamaban el Jinete Loco, pero nadie sabía por qué corría tanto. Esta es la historia de sus divertidas y misteriosas aventuras.</p>
    <br>
    <img src="/img01.jpg" alt="El Jinete Loco" width="1200">`

  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

