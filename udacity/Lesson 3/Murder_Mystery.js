
/* ****************************************** */
/* TESTING LOGIC */
// Change the value of `room` and `suspect` to test your code
// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";

// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
var suspect = "Mr. Parkes";

/* ****************************************** */

/* IMPLEMENTATION LOGIC*/
var weapon = "";  // Initial value

// A boolean variable `solved` will tell us the status of mystery
// true --> solved and false --> unsolved
var solved = false;


/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (room === 'ballroom') {
    weapon = 'poison';
    // Mr. Kalehoff was present in the ballroom at the time of the murder
    if(suspect==="Mr. Kalehoff") 
        solved = true;
}
/* ANOTHER WAY OF CHECKING THE CONDITION
if (room === 'ballroom' && suspect==="Mr. Kalehoff") {
    weapon = 'poison';
    solved = true;
}
We suggest you to try this way of checking the condition as well for an unsolved mystery.
*/
else if (room === 'gallery') {
    weapon = 'trophy';
    // Ms. Van Cleve was present in the gallery at the time of the murder
    if(suspect==="Ms. Van Cleve") 
        solved = true;
}
else if (room === 'billiards room') {
    weapon = 'pool stick';
    // Mrs. Sparr was present in the billiards room at the time of the murder
    if(suspect==="Mrs. Sparr") 
        solved = true;
} 
else if (room === 'dining room') {
    weapon = 'knife';
    // Mr. Parkes was present in the dining room at the time of the murder
    if(suspect==="Mr. Parkes") 
        solved = true;
}   

/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
    console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
}

/* ****************************************** */
