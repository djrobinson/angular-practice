'use strict';

var myapp = angular.module('myapp', []);

function generateChartData() {
	        var chartData = [];
			  var firstDate = new Date();
			  firstDate.setHours( 0, 0, 0, 0 );
			  firstDate.setDate( firstDate.getDate() - 2000 );
				
			  for ( var i = 0; i < 2000; i++ ) {
				 var newDate = new Date( firstDate );

				 newDate.setDate( newDate.getDate() + i );

				 var open = Math.round( Math.random() * ( 30 ) + 100 );
				 var close = open + Math.round( Math.random() * ( 15 ) - Math.random() * 10 );

				 var low;
				 if ( open < close ) {
					low = open - Math.round( Math.random() * 5 );
				 } else {
					low = close - Math.round( Math.random() * 5 );
				 }

				 var high;
				 if ( open < close ) {
					high = close + Math.round( Math.random() * 5 );
				 } else {
					high = open + Math.round( Math.random() * 5 );
				 }

				 var volume = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;

				 var value = Math.round( Math.random() * ( 30 ) + 100 );

				 chartData[ i ] = ( {
					date: newDate,
					open: open,
					close: close,
					high: high,
					low: low,
					volume: volume,
					value: value
				 } );
			  }
			  return chartData;
			}


myapp.controller('priceController',
	function($scope) {								
		$scope.graph = 'line';
		$scope.data = [{
	                "year": "1950",
	                "value": -0.307
	            }, {
	                "year": "1951",
	                "value": -0.168
	            }, {
	                "year": "1952",
	                "value": -0.073
	            }, {
	                "year": "1953",
	                "value": -0.027
	            }, {
	                "year": "1954",
	                "value": -0.251
	            }, {
	                "year": "1955",
	                "value": -0.281
	            }, {
	                "year": "1956",
	                "value": -0.348
	            }, {
	                "year": "1957",
	                "value": -0.074
	            }, {
	                "year": "1958",
	                "value": -0.011
	            }, {
	                "year": "1959",
	                "value": -0.074
	            }, {
	                "year": "1960",
	                "value": -0.124
	            }, {
	                "year": "1961",
	                "value": -0.024
	            }, {
	                "year": "1962",
	                "value": -0.022
	            }, {
	                "year": "1963",
	                "value": 0
	            }, {
	                "year": "1964",
	                "value": -0.296
	            }, {
	                "year": "1965",
	                "value": -0.217
	            }, {
	                "year": "1966",
	                "value": -0.147
	            }, {
	                "year": "1967",
	                "value": -0.15
	            }, {
	                "year": "1968",
	                "value": -0.16
	            }, {
	                "year": "1969",
	                "value": -0.011
	            }, {
	                "year": "1970",
	                "value": -0.068
	            }, {
	                "year": "1971",
	                "value": -0.19
	            }, {
	                "year": "1972",
	                "value": -0.056
	            }, {
	                "year": "1973",
	                "value": 0.077
	            }, {
	                "year": "1974",
	                "value": -0.213
	            }, {
	                "year": "1975",
	                "value": -0.17
	            }, {
	                "year": "1976",
	                "value": -0.254
	            }, {
	                "year": "1977",
	                "value": 0.019
	            }, {
	                "year": "1978",
	                "value": -0.063
	            }, {
	                "year": "1979",
	                "value": 0.05
	            }, {
	                "year": "1980",
	                "value": 0.077
	            }, {
	                "year": "1981",
	                "value": 0.12
	            }, {
	                "year": "1982",
	                "value": 0.011
	            }, {
	                "year": "1983",
	                "value": 0.177
	            }, {
	                "year": "1984",
	                "value": -0.021
	            }, {
	                "year": "1985",
	                "value": -0.037
	            }, {
	                "year": "1986",
	                "value": 0.03
	            }, {
	                "year": "1987",
	                "value": 0.179
	            }, {
	                "year": "1988",
	                "value": 0.18
	            }, {
	                "year": "1989",
	                "value": 0.104
	            }, {
	                "year": "1990",
	                "value": 0.255
	            }, {
	                "year": "1991",
	                "value": 0.21
	            }, {
	                "year": "1992",
	                "value": 0.065
	            }, {
	                "year": "1993",
	                "value": 0.11
	            }, {
	                "year": "1994",
	                "value": 0.172
	            }, {
	                "year": "1995",
	                "value": 0.269
	            }, {
	                "year": "1996",
	                "value": 0.141
	            }, {
	                "year": "1997",
	                "value": 0.353
	            }, {
	                "year": "1998",
	                "value": 0.548
	            }, {
	                "year": "1999",
	                "value": 0.298
	            }, {
	                "year": "2000",
	                "value": 0.267
	            }, {
	                "year": "2001",
	                "value": 0.411
	            }, {
	                "year": "2002",
	                "value": 0.462
	            }, {
	                "year": "2003",
	                "value": 0.47
	            }, {
	                "year": "2004",
	                "value": 0.445
	            }, {
	                "year": "2005",
	                "value": 0.47
	            }],
	            
	       $scope.autoData = generateChartData();
		
	});

myapp.directive('lineChart',
   function () {
       return {
       		//restricts the name which it will match in the view (element, attribute, or class)
           restrict: 'E',
           //states that the directive should replace the element in the view with the template provided
           replace:true,
          //provides a template for the chart to be contained in
           template: '<div id="linechartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           //link registers DOM listeners and is the place where the directive logic will be put
           //scope is angular project scope, element is jqlite wrapped element that matches this directive and attrs
           //is a hash of attribute name/value pairs
           link: function (scope, element, attrs) {
               
                var chart = false;
               
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart("linechartdiv", {
	            "type": "serial",
	            "theme": "none",
	            "marginLeft": 20,
	            "pathToImages": "http://www.amcharts.com/lib/3/images/",
	            "dataProvider": scope.data,
	            "valueAxes": [{
	                "axisAlpha": 0,
	                "inside": true,
	                "position": "left",
	                "ignoreAxisWidth": true
	            }],
	            "graphs": [{
	                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
	                "bullet": "round",
	                "bulletSize": 6,
	                "lineColor": "#d1655d",
	                "lineThickness": 2,
	                "negativeLineColor": "#637bb6",
	                "type": "smoothedLine",
	                "valueField": "value"
	            }],
	            "chartScrollbar": {},
	            "chartCursor": {
	                "categoryBalloonDateFormat": "YYYY",
	                "cursorAlpha": 0,
	                "cursorPosition": "mouse"
	            },
	            "dataDateFormat": "YYYY",
	            "categoryField": "year",
	            "categoryAxis": {
	                "minPeriod": "YYYY",
	                "parseDates": true,
	                "minorGridAlpha": 0.1,
	                "minorGridEnabled": true
	            }
	        });
                    
                        
                };
                initChart();
                   
         }//end watch           
       }
   }) ;
   
   
myapp.directive('candleChart',
   function () {
       return {
       		//restricts the name which it will match in the view (element, attribute, or class)
           restrict: 'E',
           //states that the directive should replace the element in the view with the template provided
           replace:true,
          //provides a template for the chart to be contained in
           template: '<div id="candlechartdiv" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           //link registers DOM listeners and is the place where the directive logic will be put
           //scope is angular project scope, element is jqlite wrapped element that matches this directive and attrs
           //is a hash of attribute name/value pairs
           link: function (scope, element, attrs) {
               
                var chart = false;
               	console.log(scope.autoData);
                var initChart = function() {
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                   chart = AmCharts.makeChart( "candlechartdiv", {
							  type: "stock",
							  "theme": "light",
							  dataSets: [ {
								 fieldMappings: [ {
									fromField: "open",
									toField: "open"
								 }, {
									fromField: "close",
									toField: "close"
								 }, {
									fromField: "high",
									toField: "high"
								 }, {
									fromField: "low",
									toField: "low"
								 }, {
									fromField: "volume",
									toField: "volume"
								 }, {
									fromField: "value",
									toField: "value"
								 } ],

								 color: "#7f8da9",
								 dataProvider: scope.autoData,
								 title: "West Stock",
								 categoryField: "date"
							  }, {
								 fieldMappings: [ {
									fromField: "value",
									toField: "value"
								 } ],
								 color: "#fac314",
								 dataProvider: scope.autoData,
								 compared: true,
								 title: "East Stock",
								 categoryField: "date"
							  } ],


							  panels: [ {
									title: "Value",
									showCategoryAxis: false,
									percentHeight: 70,
									valueAxes: [ {
									  id: "v1",
									  dashLength: 5
									} ],

									categoryAxis: {
									  dashLength: 5
									},

									stockGraphs: [ {
									  type: "candlestick",
									  id: "g1",
									  openField: "open",
									  closeField: "close",
									  highField: "high",
									  lowField: "low",
									  valueField: "close",
									  lineColor: "#7f8da9",
									  fillColors: "#7f8da9",
									  negativeLineColor: "#db4c3c",
									  negativeFillColors: "#db4c3c",
									  fillAlphas: 1,
									  useDataSetColors: false,
									  comparable: true,
									  compareField: "value",
									  showBalloon: false,
									  proCandlesticks: true
									} ],

									stockLegend: {
									  valueTextRegular: undefined,
									  periodValueTextComparing: "[[percents.value.close]]%"
									}
								 },

								 {
									title: "Volume",
									percentHeight: 30,
									marginTop: 1,
									showCategoryAxis: true,
									valueAxes: [ {

									  dashLength: 5
									} ],

									categoryAxis: {
									  dashLength: 5
									},

									stockGraphs: [ {
									  valueField: "volume",
									  type: "column",
									  showBalloon: false,
									  fillAlphas: 1
									} ],

									stockLegend: {
									  markerType: "none",
									  markerSize: 0,
									  labelText: "",
									  periodValueTextRegular: "[[value.close]]"
									}
								 }
							  ],

							  chartScrollbarSettings: {

								 graph: "g1",
								 graphType: "line",
								 usePeriod: "WW"
							  },


							  chartCursorSettings: {
								 valueLineBalloonEnabled: true,
								 valueLineEnabled: true
							  },

							  periodSelector: {
								 position: "bottom",
								 periods: [ {
									period: "DD",
									count: 10,
									label: "10 days"
								 }, {
									period: "MM",
									selected: true,
									count: 1,
									label: "1 month"
								 }, {
									period: "YYYY",
									count: 1,
									label: "1 year"
								 }, {
									period: "YTD",
									label: "YTD"
								 }, {
									period: "MAX",
									label: "MAX"
								 } ]
							  }				
	        });
                    
                        
                };
                initChart();
                   
         }//end watch           
       }
   }) ;




  
