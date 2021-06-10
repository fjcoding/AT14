//Functions 
function getSplit(str){
    var test  = str;
    var test2 = test.split(" ");
    return test2;    
}

var test2  = getSplit("-l -p 8080 -d /usr/logs");

var aux_l = 0;
var aux_p = 0;
var aux_d = 0;
console.log(test2);
test2.forEach(element =>{   
    console.log(element)  
    switch(element){
        case "-l": break;
        case "-p": break;
        case "-d": break;
    } 
})
/*
const functions = (flag,value) => {

    switch (value) {
        case "-l":  if(value == true || )
    }
}
*/




