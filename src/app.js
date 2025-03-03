const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const { accounts, users, writeJSON} = require('./data');
const servicesRoutes = require('./routes/services');
const accountRoutes = require('./routes/accounts');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts}));
app.use('/account', accountRoutes);
app.get('/profile', (req, res) => { res.render('profile', {user: users[0]})});
app.use('/services', servicesRoutes);

app.listen(3000, () => console.log('PS Project Runnning on port 3000!'));