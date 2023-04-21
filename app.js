const express = require('express');
const {create} = require('express-handlebars');
require('dotenv').config();
const contactRoutes = require('./routers/contactRouter');
const helpers = require('./views/helpers');

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = create({
    helpers
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.redirect('/contacts');
});
app.use('/contacts', contactRoutes);
app.use(express.static(__dirname + '/public'));
app.listen(PORT, () => console.info(`Server is running on http://localhost:${PORT}`));
