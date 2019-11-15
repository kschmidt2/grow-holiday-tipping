// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function() {

        let chartId = document.getElementById("chart-container");

        // checks for the chart ID and displays a backup image if the browser can't find it
        if (!chartId) {
            console.log('noId');
            let chartArea = document.getElementsByClassName("chart-area");
            for(var i = 0; i < chartArea.length; i++) {
                chartArea[i].style.display = "none";
            } 
            // insert chart screenshot here
            document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
        } else {
            console.log('yesId')
        }


        const myChart =  

            Highcharts.chart(chartId, {
                chart: {
                    type: 'bar',
                    styledMode: true,
                    spacingBottom: 25,
                    spacingRight: 10,
                    spacingLeft: 2
                }, 
                title: {
                    text: null
                },
                data: {
                    googleSpreadsheetKey: '1Wetcy2wjmiL-J9dheCz-Zhvl-ZmRfig3WZCQA7XGOII'
                },
                plotOptions: {
                    series: {
                        groupPadding: 0.1,
                        clip: false,
                    } 
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    tickLength: 5,
                    type: 'category',
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: false,
                    labels: {
                        useHTML: true,
                        overflow: 'allow'
                    },
                    max: 60,
                    tickAmount: 4
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    shadow: false,
                    padding: 10,
                    valueSuffix: '%',
                    valueDecimals: 0,
                    shared: true
                },
                responsive: {
                    rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                        spacingRight: 10
                        },
                        legend: {
                            align: 'left',
                            x: -18
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
                    }]
                }
            });

            Highcharts.chart('chart-container-2', {
                chart: {
                    type: 'bar',
                    styledMode: true,
                    spacingBottom: 25,
                    spacingRight: 10,
                    spacingLeft: 2
                }, 
                title: {
                    text: null
                },
                data: {
                    googleSpreadsheetKey: '1Wetcy2wjmiL-J9dheCz-Zhvl-ZmRfig3WZCQA7XGOII',
                    googleSpreadsheetWorksheet: 2
                },
                plotOptions: {
                    series: {
                        groupPadding: 0.1,
                        clip: false,
                    } 
                },
                legend: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        style: {
                            whiteSpace: 'nowrap'
                        }
                    },
                    tickLength: 5,
                    type: 'category',
                    tickmarkPlacement: 'on'
                },
                yAxis: {
                    title: false,
                    labels: {
                        useHTML: true,
                        overflow: 'allow'
                    },
                    max: 60,
                    tickAmount: 4
                },
                credits: {
                    enabled: false
                },
                tooltip: {
                    shadow: false,
                    padding: 10,
                    valueSuffix: '%',
                    valueDecimals: 0,
                    shared: true
                },
                responsive: {
                    rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        chart: {
                        spacingRight: 10
                        },
                        legend: {
                            align: 'left',
                            x: -18
                        },
                        tooltip: {
                            enabled: false
                        }
                    }
                    }]
                }
            });
        },1000);
    });