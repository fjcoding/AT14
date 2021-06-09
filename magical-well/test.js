function result(a, b, n){
    let i     = 0;
    let acum  = 0;
    let auxiliar = 1;
    while(i<n){
        auxiliar = a*b;
        acum = acum + auxiliar;
        a++;
        b++;
        i++;
    }
    return acum;
}

console.log(result(3,5,4));
