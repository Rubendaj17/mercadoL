const express = require('express');
const app = express ();
const path = require('path');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath))

app.listen(process.env.PORT || 3000, ()=> {
    console.log('Corriendo Servidor')
});


app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

const userRoutes = require('./routes/usersRoutes')
app.use('/users',userRoutes)




