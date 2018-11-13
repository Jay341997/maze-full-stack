const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/get_best_algo', (req, res) => {
    var mat_to_solve = req.body.matrix;
    res.send({mat: mat_to_solve});
});

app.listen(port, () => console.log(`Listening on port ${port}`));