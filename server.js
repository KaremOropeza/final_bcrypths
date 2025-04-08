'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
//constante para indicar el número de rondas de salting (12), que determina la complejidad del cifrado. 
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


app.get('/', (req, res) => {
    res.send("Hola Mundo");
});


//comparar contraseñas de forma -ASINCRONA- con bcrypt

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    console.log(res);
  });
});

//END_ASYNC

//comparar contraseñas de forma -SINCRONA- con bcrypt
//START_SYNC
var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);

var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
