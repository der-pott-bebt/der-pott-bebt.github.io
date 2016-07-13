$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Anzahl Erdbeben pro Wochentag'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
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
            crosshair: true
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
                groupPadding: 0,
                borderWidth: 0,
                shadow: true,
                color: "#E40B03"
            }

        },
        series: [{
            name: 'Anzahl Erdbeben',
            data:[3429,4208,4472,4425,4474,3461,1667]
        }]
    });
});
