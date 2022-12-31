/* fizz for divisible by 3 , buzz for 5 and fizz_buzz for both*/
var $counting = 0;
while($counting <= 100)
{
    
    if($counting % 3 == 0){
        if ($counting % 5 == 0 ){
            console.log("Fizz_Buzz");
        }
        else{
            console.log("fizz");
        }
    }
    else if($counting % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log($counting);
        
    }
    ;
    $counting++
        }
    
