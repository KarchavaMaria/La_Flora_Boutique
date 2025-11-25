import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import app from './app.js';
import config from 'config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

const PORT = config.get('PORT');

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
