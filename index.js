const express = require("express");
const { sendNotification } = require("./controllers/sendNotification");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

app.use(cors());

// Directorio publico
app.use(express.static('public'));


app.post("/send-notification", async (req, res) => {
    const { token, title, body } = req.body;
    
    if (!token || !title || !body) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    try {
        await sendNotification(token, title, body);
        res.status(200).json({ success: true, message: "Notificación enviada" });
    } catch (error) {
        res.status(500).json({ error: "Error al enviar la notificación" });
    }
});

app.listen(process.env.PORT, () => console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`));
