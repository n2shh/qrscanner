require("dotenv").config();
const express = require("express");
const cors = require("cors");
const qrcode = require("qrcode");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const { data } = req.query;
  try {
    const image = await qrcode.toBuffer(data.toString(), { type: "image/png" });
    res.contentType("image/png");
    res.send(image);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error generating QR code");
  }
});

const server = app.listen(8000 || process.env.PORT, () => {
  console.log("Server listening on port 8000");
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("message", (data) => {
    console.log(data);
    io.sockets.emit("message", data);
  });
});
