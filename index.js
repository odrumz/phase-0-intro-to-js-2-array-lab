const cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(Ralph){
    cats.push("Ralph")} 

function destructivelyPrependCat(name){
    cats.unshift("Bob")}

 function destructivelyRemoveLastCat(){
    cats.pop()}

 function destructivelyRemoveFirstCat(){
    cats.shift()}

 function appendCat(name){
    return[...cats,"Broom"]
}

 function prependCat(name){
    return["Arnold",...cats]
}

 function removeLastCat(){
    return cats.slice(0, cats.length -1);
}
removeLastCat();

function removeFirstCat(){
    return cats.slice(1);
}
removeFirstCat();


