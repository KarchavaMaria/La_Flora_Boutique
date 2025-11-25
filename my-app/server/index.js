import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from './app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.join(__dirname, "../client/build");

app.use(express.static(clientBuildPath));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
