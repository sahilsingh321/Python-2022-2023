//fizz for 3 , buzz for 5 and fizz_bzz for 3 and 5 both
for(var $counting = 0 ; $counting <= 100 ; $counting++){
    if($counting % 3 == 0){
        if($counting % 5 == 0){
            console.log("fizz_buzz");}
        else{
            console.log("fizz");
        }
    }
    else if($counting % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log($counting);}
        

        
    }
  
