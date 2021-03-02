const express = require('express');
const path = require('path');
const apiRoutes = require(path.join(__dirname, 'routes', 'apiRoutes'));
const htmlRoutes = require(path.join(__dirname, 'routes', 'htmlRoutes'));

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});
