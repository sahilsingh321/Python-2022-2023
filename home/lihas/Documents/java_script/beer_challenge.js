//beer lets chears!!
var number = 99;
function beers(){
    while (number > 1){
        console.log(number+" bottles of beer on the wall, "+number+ " bottles of beer\n" + "Take one down and pass it around, " + (number-1) + " bottles of beer on the wall") ;
        number--;
    }
    if (number == 1){
        console.log(number+" bottles of beer on the wall, "+number+ " bottles of beer\n" + "Take one down and pass it around, " + " no bottles of beer on the wall") ;
        console.log(" No more bottles of beer on the wall" + " no more beer\n" + " go to store and buy some more " + 99 + " bottles of beer on the wall");
    }
    
}
beers();
