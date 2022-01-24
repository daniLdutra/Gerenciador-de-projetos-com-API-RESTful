const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
