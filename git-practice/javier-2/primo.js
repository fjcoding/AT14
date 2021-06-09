function isPrime(number){
    if(number==1)
        return false;
    if(number==2) 
        return true;
    if(number%2==0)
        return false 
    for(let i=3;i*i<=number;i=i+2){
        if(number%i==0)
            return false;
    }       
    return true;
}

for(let i=1;i<=100;i++)
    if(isPrime(i)){
        console.log(i);
    }
