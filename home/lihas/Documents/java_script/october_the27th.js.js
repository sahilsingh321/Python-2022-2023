//Write the code to select the random names from the list of the names
var array = ["sahil", "somya" ,"rosy" , "surya"];
function whoisgoingtopay(){
    var random_number = Math.random();
        
    var combinations = array.length;
    var outcomes = Math.floor((random_number * combinations)) ;
    // console.log(outcomes);
    function payment(){
 var $person_to_pay = array[outcomes];
        console.log("So Today " + $person_to_pay + " has to pay the full amount");
        
    }
    payment();

}
whoisgoingtopay();