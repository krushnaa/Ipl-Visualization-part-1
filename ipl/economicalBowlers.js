function economicalBowlers(deliveries,matches){ 
    const result = {}
    const ids = matches.filter(obj =>obj['season'] === '2016').map(obj=>parseInt(obj.id))
    const dels = deliveries.filter(del=>ids.includes(parseInt(del['match_id'])))
       for(let id of ids){
        for(let del of dels){
            if(parseInt(del['match_id']) === id){
                if(result[del.bowler]){
                    result[del.bowler].runConceded += parseInt(del['total_runs'])
                    result[del.bowler].bowls += 1
                }else{
                    result[del.bowler] = {}
                    result[del.bowler].runConceded = parseInt(del['total_runs'])
                    result[del.bowler].bowls = 1
                }
            }
        }
    }
    for(let key in result){
        result[key].economuRate = +((result[key].runConceded/(result[key].bowls)/6).toFixed(2))
    }
        return result
}

module.exports = economicalBowlers