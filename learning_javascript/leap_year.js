
function is_leap_year(year) {

    if (year%400 == 0)
    {
        console.log(true)
    }
    else if((year%4 == 0) && (year%100 != 0))
    {
        console.log(true)
    }
    else
    {
        console.log(false)
    }
}

is_leap_year(2017)