var antecessor = 0;
var sucessor = 1;

for(var i = 0; i<10; i++){
    console.log(antecessor)
    console.log(sucessor)

    antecessor = antecessor + sucessor;
    sucessor= antecessor + sucessor;
}

