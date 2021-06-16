class DefaultValue
{   constructor(id,deftValue)
    {
        this.deftValue = deftValue;
        this.id = id;
    }
    
}

const defValL = new DefaultValue('-l', false);
const defValD = new DefaultValue('-d'," ");
const defValP = new DefaultValue('-p',0);

console.log(defValL.id);
console.log(defValL.deftValue);

console.log(defValD.id);
console.log(defValD.deftValue);

console.log(defValP.id);
console.log(defValP.deftValue);

export {DefaultValue};
 