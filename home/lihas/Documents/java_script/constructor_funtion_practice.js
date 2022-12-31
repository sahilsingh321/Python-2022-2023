//This is the constructor  function in js
//Creacting Object 
var obj1 = {
    name : "Sahil",
    class : 10,
    age : 16,
}
//Using Constructor function
function MakeObject($name , $class , $age){
    this.$name = $name;
    this.$class = $class;
    this.$age = $age;
}
var obj1 = new MakeObject("Somya" , 9 , 15);