class Flag
{
    constructor(id, value=null)
    {
        this.id =id;
        this.value = value;
    }
}

/*const flagL = new Flag('-l');
const flagP = new Flag('-p',0);
const flagD = new Flag('-d','/usr/logs');

console.log(flagL.id);
console.log(flagL.value);

console.log(flagP.id);
console.log(flagP.value);

console.log(flagD.id);
console.log(flagD.value);*/

export { Flag };