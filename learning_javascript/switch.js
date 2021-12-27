/*
function day_of_week(day){
    switch(day){
        case 1: console.log("Monday");
        case 2: console.log("Tuesday");
        case 3: console.log("Wednesday");
        case 4: console.log("Thursday");
        case 5: console.log("Friday");
        case 6: console.log("Saturday");
        case 7: console.log("Sunday");
        default: console.log("Invalid day of week!"); 
    }
}
*/
/*
Note - on using of console.log while switch case find 
the case it will start printing from that point to the end point so 
below shown return will used performed in mozilla console 
*/


function day_of_week(day){
    switch(day){
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day of week!"
    }
}
day_of_week(7)
