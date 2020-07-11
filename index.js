import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log("Task 1: 2014 final");
const final2014 = fifaData.filter((game) => (game.Year === 2014) && (game.Stage === "Final"))[0];
console.log(`Home team name: ${final2014["Home Team Name"]}`);
console.log(`Away team name: ${final2014["Away Team Name"]}`);
console.log(`Home team goals: ${final2014["Home Team Goals"]}`);
console.log(`Away team goals: ${final2014["Away Team Goals"]}`);
console.log(`Winner: ${final2014["Win conditions"].split(' ')[0]}`);
console.log('\n');

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((game) => game["Stage"] === "Final");
};

let finals = getFinals(fifaData);
console.log(`Task 2: getFinals\n${finals}`);
console.log('\n');

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, cb) {
    let years = [];
    cb(data).forEach((game) => {years.push(game.Year);});
    return years;
};

let finalsYears = getYears(fifaData, getFinals);
console.log(`Task 3: getYears\n${finalsYears}`);
console.log('\n');

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, cb) {
    let winners = [];
    cb(data).forEach((game) => {
        (game["Home Team Goals"] > game["Away Team Goals"]) ? winners.push(game["Home Team Name"]) : winners.push(game["Away Team Name"]);
    });
    return winners;
};

let winners = getWinners(fifaData, getFinals);
console.log(`Task 5: getWinners\n${winners}`);
console.log('\n');

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, finalsFunction, winnersFunction, yearsFunction) {
    let years = yearsFunction(data, finalsFunction), winners = winnersFunction(data, finalsFunction), str = [];
    years.forEach((year, i) => {str.push(`In ${year}, ${winners[i]} won the world cup!`);});
    return str;
};

console.log('Task 6: getWinnersByYear\n', ...getWinnersByYear(fifaData, getFinals, getWinners, getYears));
console.log('\n')

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let goalsArray = data.map(game => [game["Home Team Goals"], game["Away Team Goals"]]);
    return `Home Team average goals: ${goalsArray.reduce((acc, goals) => acc + goals[0], 0) / goalsArray.length}, Away Team average goals: ${goalsArray.reduce((acc, goals) => acc + goals[1], 0) / goalsArray.length}`;
};

console.log(`Task 7: getAverageGoals\n${getAverageGoals(fifaData)}`);
console.log('\n');

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    return data.reduce((wins, game) => {
        if (game["Home Team Initials"] === teamInitials && (game["Home Team Goals"] > game["Away Team Goals"])) return ++wins;
        else if (game["Away Team Initials"] === teamInitials && (game["Home Team Goals"] < game["Away Team Goals"])) return ++wins;
        else return wins;
    }, 0);
};

console.log(`Stretch 1: getCountryWins\n${getCountryWins(fifaData, "USA")}`);


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    
};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
