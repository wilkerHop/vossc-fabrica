const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/", express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.redirect('/fabrica');
})

app.get('/fabrica',(req,res)=>{
	res.render('fabrica')
})

app.listen(process.env.PORT || 3000, () => {
	console.log('running on 3000 port');
})