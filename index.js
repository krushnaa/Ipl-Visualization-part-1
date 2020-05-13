const fs = require("fs");
const csv = require("csvtojson");
const path = require('path')
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const matchesPlayedPerYear=require("./ipl/matchesPlayedPerYear")
const matchesWonofPerTeamPerYear=require("./ipl/MatchesWonofPerTeamPerYear")
const extraRunsConcededByEachTeam = require("./ipl/extraRunsConcededByEachTeam")
const economicalBowlers = require('./ipl/economicalBowlers')
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

async function main(fileName){
        const data = await csv().fromFile(path.join(__dirname,`./csv_data/${fileName}`))
        
        return data
    }

    async function getFinalResultData(){
      const matches = await main('matches.csv');
      const deliveries = await  main('deliveries.csv');
      fs.writeFile(path.join(__dirname,'./public/data.json'),JSON.stringify({
          matchesPlayedPerYear:matchesPlayedPerYear(matches),
          matchesWonofPerTeamPerYear:matchesWonofPerTeamPerYear(matches),
          extraRunsConcededByEachTeam:extraRunsConcededByEachTeam(deliveries,matches),
          economicalBowlers:economicalBowlers(deliveries,matches)
      }),'utf8',err=>{
          if(err){
              console.log(err)
          }
      })
  }
  
  getFinalResultData();
  