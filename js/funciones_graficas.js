Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Más vendidos en agosto 2024'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'A continuacion mostramos el graficos del top 5 de los productos mas vendidos el mes de agosto 2024'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Porcentaje',
            colorByPoint: true,
            data: [
                {
                    name: 'Sofás',
                    sliced: true,
                    selected: true, /*selecciona ese troco de grafica*/
                    y: 30
                },
                {
                    name: 'Camas',
                    y: 25
                },
                {
                    name: 'Mesas',
                    y: 20
                },
                {
                    name: 'Sillas',
                    y: 15
                },
                {
                    name: 'Estanterias',
                    y: 10
                }
            ]
        }
    ]
});

// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'center',
        text: 'Días más concurridos'
    },
    subtitle: {
        align: 'center',
        text: 'En el siguiente grafico se muestra que dias y que horas son mas frecuentados por los clientes'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Dias de la semana'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
            '<b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Días de venta',
            colorByPoint: true,
            data: [
                {
                    name: 'Lunes',
                    y: 23.5,
                    drilldown: null
                },
                {
                    name: 'Martes',
                    y: 12.1,
                    drilldown: null
                },
                {
                    name: 'Miércoles',
                    y: 17.8,
                    drilldown: null
                },
                {
                    name: 'Jueves',
                    y: 11.9,
                    drilldown: null
                },
                {
                    name: 'Viernes',
                    y: 10.3,
                    drilldown: null
                },
                {
                    name: 'Sábado',
                    y: 15,
                    drilldown: null
                },
                {
                    name: 'Domingo',
                    y: 9.4,
                    drilldown: null
                }
            ]
        }
    ]
});
