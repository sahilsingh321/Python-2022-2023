//[0,1,1,2,3,5,8]
var $array1 = [];
var $digits_place = 0;
function fibonacciGenerator(n){
    var $array_length = $array1.length;
    while($array_length<n){
        //Algorithm
        $to_push = ($digits_place +($digits_place+1));
        $array1.push($to_push);
        console.log($array1);
        $digits_place++;
    }
}

fibonacciGenerator(10);