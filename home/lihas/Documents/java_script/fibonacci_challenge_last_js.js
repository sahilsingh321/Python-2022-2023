//I am going to complete this challenge today
var $fibo_array = [0,1];
var $last_digit = Number($fibo_array.slice(($fibo_array.length-1) , $fibo_array.length));
var $second_lastdigit = Number($fibo_array.slice(($fibo_array.length-2) , ($fibo_array.length-1)));

function $fibo_Cal($till){
  while($till>=$last_digit)  {

  $last_digit = Number($fibo_array.slice(($fibo_array.length-1) , $fibo_array.length));
  $second_lastdigit = Number($fibo_array.slice(($fibo_array.length-2) , ($fibo_array.length-1)));
    ($fibo_array.push($last_digit+$second_lastdigit));
  
  console.log($fibo_array);      
    console.log($last_digit)
        
    
};
}
$fibo_Cal(1)
