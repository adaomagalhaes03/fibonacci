var antecessor = 0;
var sucessor = 1;

for(var i = 0; i<100; i++){
    console.log(antecessor)
    console.log(sucessor)
     //formula de fibonacci fn
    antecessor = antecessor + sucessor;
    sucessor= antecessor + sucessor;
}

