Highcharts.chart('grafico1', {
    
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
            data: [1, 2, 4, 8, 16, 32, 64, 89],
            pointStart: 1,
            label: {enabled: false}
        }]
    });