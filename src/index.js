const http = require('http');
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const userController = require('./controller/user');
const userRouter = require('./router/user.router');
// body parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// user user router
userRouter.use('/users', userController.user);


// user_router.get('/users', (req, res) => {
//     res.render('user');
// })


// views engine setup 
app.engine('handlebars', handlebars());
app.set('views', path.join(__dirname, '/resource/views'));
app.set("view engine", 'handlebars');

// handlebars.registerPartial(__dirname, '/views/partials')

app.get('/', (req, res) => {
    res.render('search');
});
app.get('/user/search', (req, res) => {
    res.render('search');
})


// start server
app.listen(3000, () => {
    console.log('app is running localhost 3000');
});