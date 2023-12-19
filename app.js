const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT,function(){
    console.log(`O express esta rodando na porta ${PORT}`);

});

app.get('/', (req, res) => {
    res.send("Está funcionando 2334");
});