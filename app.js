const express = require('express');
const app = express();
const port = 8080; // Порт, на котором будет запущено приложение

// Обработка корневого маршрута
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});