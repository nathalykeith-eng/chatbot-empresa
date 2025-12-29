const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Respuestas del chatbot (empresa ficticia)
const respuestas = {
  horario: "Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00.",
  servicios: "Ofrecemos desarrollo web, automatización de procesos y soluciones digitales.",
  contacto: "Puedes escribirnos a contacto@empresa.com"
};

// Ruta de prueba
app.get('/', (req, res) => {
  res.send("API del chatbot activa");
});

// Ruta del chatbot
app.post('/chat', (req, res) => {
  const mensaje = req.body.message.toLowerCase();
  let respuesta = "No he entendido tu mensaje. ¿Puedes reformularlo?";

  if (mensaje.includes("horario")) respuesta = respuestas.horario;
  if (mensaje.includes("servicio")) respuesta = respuestas.servicios;
  if (mensaje.includes("contacto")) respuesta = respuestas.contacto;

  res.json({ reply: respuesta });
});

// Arrancar servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
