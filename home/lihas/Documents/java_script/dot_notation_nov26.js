//This is the dot notation in java script
function Constructor_worker(name , age , gender ){
    this.name = name; 
    this.age = age;
    this.gender =  gender;
    this.clean = function(){
        document.body.setAttribute("bgcolor" ,String(prompt("name")));
    }
}