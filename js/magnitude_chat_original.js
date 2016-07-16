var options = {
	"chart": {
		"type": "column"
	},
	"plotOptions": {
		"series": {
			"pointPadding": 0,
			"groupPadding": 0,
			"borderWidth": 0,
			"shadow": false
		}
	},
	"title": {
		"text": "Stärke der Erdbeben"
	},
	"subtitle": {
		"text": "1983-2016"
	},
	"xAxis": {
		"title": {
			"text": "Magnitude",
			"style": {
				"color": "#151414"
			}
		},







custom code:
/*
// Sample of extending options:
Highcharts.extend(options, Highcharts.merge(options, {
    chart: {
        backgroundColor: "#bada55"
    },
    plotOptions: {
        series: {
            cursor: "pointer",
            events: {
                click: function(event) {
                    alert(this.name + " clicked\n" +
                          "Alt: " + event.altKey + "\n" +
                          "Control: " + event.ctrlKey + "\n" +
                          "Shift: " + event.shiftKey + "\n");
                }
            }
        }
    }
}));
*/

		"type": "category"
	},
	"yAxis": {
		"labels": {
			"format": "{value:.f}"
		},
		"title": {
			"style": {
				"color": "#050505"
			}
		}
	},
	"legend": {
		"enabled": false
	},
	"series": [
		{
			"index": 0,
			"color": "#9a0404",
			"name": "#",
			"data": [
				[
					"1.0",
					1849
				],
				[
					"1.1",
					1857
				],
				[
					"1.2",
					1769
				],
				[
					"1.3",
					1607
				],
				[
					"1.4",
					1549
				],
				[
					"1.5",
					1357
				],
				[
					"1.6",
					1030
				],
				[
					"1.7",
					833
				],
				[
					"1.8",
					571
				],
				[
					"1.9",
					373
				],
				[
					"2.0",
					237
				],
				[
					"2.1",
					175
				],
				[
					"2.2",
					162
				],
				[
					"2.3",
					79
				],
				[
					"2.4",
					58
				],
				[
					"2.5",
					33
				],
				[
					"2.6",
					21
				],
				[
					"2.7",
					16
				],
				[
					"2.8",
					15
				],
				[
					"2.9",
					10
				],
				[
					"3.0",
					9
				],
				[
					"3.1",
					2
				],
				[
					"3.2",
					1
				],
				[
					"3.3",
					3
				],
				[
					"3.4",
					0
				],
				[
					"3.5",
					2
				],
				[
					"3.6",
					1
				],
				[
					"3.7",
					1
				],
				[
					"3.8",
					0
				],
				[
					"3.9",
					0
				],
				[
					"4.0",
					0
				]
			]
		}
	]
};
