/*
function day_of_week(day){
    switch(day){
        case 1: console.log("Monday");
                break;
        case 2: console.log("Tuesday");
                break;
        case 3: console.log("Wednesday");
                break;
        case 4: console.log("Thursday");
                break;
        case 5: console.log("Friday");
                break;
        case 6: console.log("Saturday");
                break;
        case 7: console.log("Sunday");
                break;
        default: console.log("Invalid day of week!"); 
    }
}
*/
/*
Note - on using of console.log while switch case find 
the case it will start printing from that point to the end point so 
below shown return will used performed in mozilla console 

if dont won't that to happened simple we can break the statement from that case using break statement 
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
