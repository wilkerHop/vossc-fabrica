$.getJSON('../DATA/test.json', function (data) {

	Highcharts.chart('forn1', {

		title: {text: 'Grafico 1'},

		xAxis: {tickInterval: 7},

		yAxis: {
			type: 'logarithmic',
			tickInterval: 1,
			minorTickInterval: 0.1
		},

		tooltip: {
			headerFormat: '<b>{series.name}</b><br />',
			pointFormat: 'Dias da Semana = {point.x}, Ocorrencias = {point.y}'
		},

		series: [{
			data: data.fornecedor1,
			pointStart: 1,
			label: {enabled: false}
		}]
	});
	Highcharts.chart('forn2', {

		title: {
			text: 'Grafico 1'
		},

		xAxis: {
			tickInterval: 7
		},

		yAxis: {
			type: 'logarithmic',
			tickInterval: 1,
			minorTickInterval: 0.1
		},

		tooltip: {
			headerFormat: '<b>{series.name}</b><br />',
			pointFormat: 'Dias da Semana = {point.x}, Ocorrencias = {point.y}'
		},

		series: [{
			data: data.fornecedor1,
			pointStart: 1,
			label: {
				enabled: false
			}
		}]
	});

});