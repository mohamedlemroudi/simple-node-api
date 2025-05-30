const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Permitir solicitudes desde tu frontend
app.use(express.json());

app.post('/api/hello', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hola, ${name || 'invitado'}!` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
