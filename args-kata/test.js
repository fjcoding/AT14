//Functions 
function getSplit(str){
    var test  = str;
    let test2 = test.split(" ");
    return test2;    
}

var test2  = getSplit("-l -p 8080 -d /usr/logs");

var aux_l = true;
var aux_p = 0;
var aux_d = 0;
console.log(test2);
const compare = (aux_p="")=>
{
    switch(aux_p)
    {
        case "-l":
            return 0
            break;
        case "-p":
            return 1
            break;
        case "-d":
            return 2
            break;
        default:
            return "ninguna de las banderas encontradas";
            break;
        
    }
}; 

for (let i = 0; i < test2.length() ; i++) {
    switch(compare(test2[i]))
    {
        case 0:
            if(test2[i+1].indexOf("-") >= 0){
                aux_l = false;
                break;
            }
    }
    
    if(compare(test2[i])==0);
    if(test2[i] === "-l"){ 
        if(test2[i+1].indexOf("-") >= 0){
            aux_l = false;
            break;
        }
    }
}


for (let i = 0; i < test2.length() ; i++) {
    if(test2[i] === "-p"){ 
        if(parseInt(test2[i+)("-") >= 0){
            
            aux_l = false;
            break;
        }
    }
}

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




