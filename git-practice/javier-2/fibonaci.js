function fibonaci(limit){
    let first  = 0;
    let second = 1;
    let last   = first + second;
    let acount = 1;
    while(acount<=limit){
        console.log(last)
        last   = first + second;
        first  = second;
        second = last; 
        acount++;
    }
}

fibonaci(10);