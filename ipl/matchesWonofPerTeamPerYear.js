function matchesWonofPerTeamPerYear(matches){
    const result = {}
    for(let match of matches){

        if(result[match.winner]){
            if(result[match.winner][match.season]){
                result[match.winner][match.season] += 1
            }else{
                result[match.winner][match.season] = 1
            }
        }else{
            result[match.winner] = {}
            result[match.winner][match.season] = 1
        }
    }
    console.log(result)
    return result;
    
}
module.exports=matchesWonofPerTeamPerYear