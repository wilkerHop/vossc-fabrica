$.getJSON('../DATA/test.json', function (data) {

	Highcharts.chart('forn1', {

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
			data: data,
			pointStart: 1,
			label: {
				enabled: false
			}
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
			data: data,
			pointStart: 1,
			label: {
				enabled: false
			}
		}]
	});

});

$.getJSON('../DATA/stock.json', function (data) {

	// create the chart
	Highcharts.stockChart('forn3', {


		rangeSelector: {
			selected: 1
		},

		title: {
			text: 'AAPL Stock Price'
		},

		series: [{
			type: 'candlestick',
			name: 'AAPL Stock Price',
			data: data,
			dataGrouping: {
				units: [
					[
						'day', // unit name
						[1] // allowed multiples
					],
					[
						'week', // unit name
						[1] // allowed multiples
					],
					[
						'month', [1, 2, 3, 4, 6]
					]
				]
			}
		}]
	});
});