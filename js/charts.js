$(function () {
    $('#chart_weekly').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Anzahl Erdbeben pro Wochentag'
        },
        subtitle: {
            text: 'Quelle: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Montag',
                'Dienstag',
                'Mittwoch',
                'Donnerstag',
                'Freitag',
                'Samstag',
                'Sonntag'
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Anzahl Erdbeben'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0.02,
                borderWidth: 0,
                shadow: true,
                color: "#b20902"
            }

        },
        series: [{
            name: 'Anzahl Erdbeben',
            data:[3429,4208,4472,4425,4474,3461,1667]
        }]
    });
});

$(function () {
    $('#chart_hourly').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Vertelung der Erdbeben im Tagesverlauf'
        },
        subtitle: {
            text: 'Quelle: WorldClimate.com'
        },
        xAxis: {
            categories: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Anzahl Erdbeben'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        legend: {
          enabled: false,
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                groupPadding: 0.06,
                borderWidth: 0,
                shadow: true,
                color: "#b20902"
            }

        },
        series: [{
            name: 'x',
            data:[1530,1510,1423,1367,1026,786,690,622,706,768,890,880,860,926,954,1075,1071,1102,1143,1353,1397,1391,1354,1312]
        }]
    });
});
