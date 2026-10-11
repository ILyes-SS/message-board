const express = require('express')

const router = express.Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

router.get('/', (req, res, next)=>{
    res.render('index.ejs',{
        title: 'message board',
        messages: messages
    })
})

router.get('/new', (req, res, next)=>{
    res.render('form.ejs',{
        title: 'message board',
        heading: "enter author and message"
    })
})

router.get('/message/:text', (req, res, next)=>{
    const filtered = messages.filter((msg)=> msg.text == req.params.text)
    res.render('index.ejs',{
        title: 'message board',
        messages: filtered
    })


})

router.post('/new', (req, res, next)=>{
    const author = req.body.author
    const message = req.body.message

    messages.push({ text: message, user: author, added: new Date() });

    res.redirect('/')
})


module.exports = router