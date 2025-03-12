import express from 'express'
import 'dotenv/config'
import routeSinger from './routes/singer.js'

const app = new express()

//Setters
app.set('PORT',process.env.PORT || 4500)

//middlewares
app.use('/singers',routeSinger);

app.listen(app.get('PORT'),()=>console.log(`Server Ready at Port ${app.get('PORT')}`))