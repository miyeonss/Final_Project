const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const static = require('serve-static');

app.set('port', process.env.PORT || 8104);

app.use(static(path.join(__dirname, 'imgs')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/home', (req, res) => {
	res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/new', (req, res) => {
        res.sendFile(path.join(__dirname, '/new.html'));
});

app.get('/profile', (req, res) => {
	res.sendFile(path.join(__dirname, '/profile.html'));
});

app.get('/account', (req, res, next) => {
	res.sendFile(path.join(__dirname, '/account.html'));
});

app.get('/follow', (req, res) => {
	res.sendFile(path.join(__dirname, '/follow.html'));
});

app.get('/msg', (req, res) => {
	res.sendFile(path.join(__dirname, '/msg.html'));
});

app.listen(app.get('port'), () => {
	console.log(app.get('port'), '번 포트에서 대기중');
});

app.use((err, req, res, next) => {
	console.log(err);
	res.stats(500).send(err.message);
});
