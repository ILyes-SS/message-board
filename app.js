
const indexRouter = require('./routes/index')
const express = require('express')

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/', indexRouter)

app.listen(8000, ()=>{
    console.log('server connected')
})