//output = [0,1,1,2,3,5]
var $fibo_array = [0,2,3];
var $fibo_digit = 0;
while($fibo_digit<=$fibo_array.length){
    console.log("it is smaller");
    var $last_item = ($fibo_array.slice(($fibo_array.length-1) , $fibo_array.length));
    var $second_last_item = ($fibo_array.slice(($fibo_array.length-2),($fibo_array.length-1)));
    
    var $to_push = (Number($last_item) + Number($second_last_item));
    $fibo_array.push($to_push);
    $fibo_digit++;
   
}