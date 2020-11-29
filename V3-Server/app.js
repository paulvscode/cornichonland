const express = require('express');

const app = express();

const router = require('./app/router');

const port = 5000;

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('./assets'));

app.set('port', process.env.PORT || port);

app.use(router);

app.listen(port, () => {
    console.log(`server launched on ${port}`)
});