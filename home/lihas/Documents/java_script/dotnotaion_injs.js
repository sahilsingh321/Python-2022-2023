//so this is besically what a dot notaion is 
//creating a constructor function 
 function hello(){
        document.head.innerHTML = "<title> Lol </title>"; 
        document.body.innerHTML = "<h1 align='center' style='text-decoration:underline; font-size:35 ; color:red'> HELLO WORLD </h1>"  
 }
function ConstructChild(name , age ){
    this.$name = name;
    this.$age = age;
   
    this.$bomm = hello;
}