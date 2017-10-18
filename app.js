const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uri = 'mongodb://vossc:vossc@ds121665.mlab.com:21665/vossc';
var db = mongoose.connect(uri, (err) => {
	if (err) return console.log('fudeo');
	console.log('conectado ao mlab');
});

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/", express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.redirect('/fabrica');
})

app.get('/fabrica', (req, res) => {

	var erroSchema = {

	};

	var Erro = mongoose.model('Erro', erroSchema);
	var errosG = [];
	Erro.find({}, (err, erros) => {
		if (err) console.log(err);
		// console.log(erros)

		var forn1 = [
			{text: 'Atraso na entrega'},
		]
		var forn2 = []
		var forn3 = [
			{text: 'Atraso na entrega'},
			{text: 'Produtos impróprios'},
			{text: 'Problemas de comunicação'},
		]
		var prod = [];
		var armazem = [];
		var vendas = [];
		var patio = [];
		var vendasSite = [];

		console.log(erros[0])

		res.render('fabrica', {
			forn1,
			forn2,
			forn3,
			prod,
			armazem,
			vendas,
			patio,
			vendasSite,
			erros
		})
	});
})

app.get('/dash', (req, res) => {
	res.render('dash')
})

app.listen(process.env.PORT || 3000, () => {
	console.log('running on 3000 port');
})