//This is a fizz buzz challenge in js
/* if divisible by 3 = fizz
    if divisible by 5 = buzz
    if by both 3 and 5 = fizz_buzz
*/
var $till = prompt("Till How much you want to calculate the fizz buzz");
function $fizz_buzz(){for (var i = 0 ; i < $till ; i++){
    if (i % 3 == 0){
        if(i % 5 == 0){
            console.log(i + "Fizz_Buzz");
        }
        else{
            console.log(i + "Fizz");
        }
    }
    if (i % 5 == 0){
        console.log(i + "Buzz")
    }
        
        
}
                     }
$fizz_buzz()