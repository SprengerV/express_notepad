const path = require('path');

const apiRoutes = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
        res.sendFile(path.join(__dirname, '..', 'public', 'assets', 'js', 'index.js'));
    });
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
        res.sendFile(path.join(__dirname, '..', 'public', 'assets', 'js', 'index.js'));
    });
};

module.exports = apiRoutes;