
fetch('./data.json')
    .then(res => res.json())
    .then(obj => {
        for (let func in obj) {
            let arr;
            switch (func) {
                case 'matchesPlayedPerYear':
                    arr = [];
                    for (let key in obj.matchesPlayedPerYear) {
                        arr.push([key, obj.matchesPlayedPerYear[key]])
                    }
                    plotGraph('Matches played per year', "years", 'container1', arr)
                    break;
                case 'matchesWonofPerTeamPerYear':
                    arr = [];
                    for (let key in obj.matchesWonofPerTeamPerYear) {
                        let temp = [];
                        for(let team in obj.matchesWonofPerTeamPerYear[key]){
                            temp.push([team,obj.matchesWonofPerTeamPerYear[key][team]]);
                        }
                        
                        arr.push({name:key, data:temp})
                    }
                    plotGraph1('matches won of Per Team Per Year', 'container2', arr)
                    
                    break;
                case 'extraRunsConcededByEachTeam':
                    arr = [];
                    for (let key in obj.extraRunsConcededByEachTeam) {
                        arr.push([key, obj.extraRunsConcededByEachTeam[key]])
                    }
                    plotGraph('extra runs conceded by each team in year 2016', "teams", 'container3', arr)
                    break;
                case 'economicalBowlers':
                    arr = [];
                    for (let key in obj.economicalBowlers) {
                        arr.push([key, obj.economicalBowlers[key].economuRate])
                    }
                    arr = arr.sort((a, b) => a[1] - b[1]).slice(0, 11);
                    plotGraph('top 10 economical bowlers along with their economy rates in year 2015', "bowlers", 'container4', arr)
                    break;
            }
        }
    })

function plotGraph(title, name, id, seriesData) {
    Highcharts.chart(id, {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            min: 0.00,
            title: {
                text: 'Matches'
            }
        },
        series: [{
            name: name,
            data: seriesData
        }]
    });
}

function plotGraph1(title, id, seriesData) {
    Highcharts.chart(id, {
        chart: {
            type: 'column'
        },
        title: {
            text: title
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            min: 0.00,
            title: {
                text: 'Matches'
            }
        },
        series: seriesData
    });
}

