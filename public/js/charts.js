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
});

$.getJSON('../DATA/forn2.json', function (data) {
console.log(data)
	Highcharts.chart('forn2', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Browser market shares January, 2015 to May, 2015'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{
				name: 'Microsoft Internet Explorer',
				y: 56.33
			}, {
				name: 'Chrome',
				y: 24.03,
				sliced: true,
				selected: true
			}, {
				name: 'Firefox',
				y: 10.38
			}, {
				name: 'Safari',
				y: 4.77
			}, {
				name: 'Opera',
				y: 0.91
			}, {
				name: 'Proprietary or Undetectable',
				y: 0.2
			}]
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