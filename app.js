for(let i =0; i<5; i++){
    console.log(i);
}

const myArray = [2,4,6,8,10,"murgi", false];

const myObj = {    
bird1:"Doyel",
bird2:"Chorui",
bird3:"Babui",
bird4:"Moyna"
}

for(let i=0; i<myArray.length; i++){
    console.log(typeof(myArray[i]));
}

for(let arr of myArray){
    console.log(arr);
}

for(let x in myObj){
    console.log(myObj[x]);
}

