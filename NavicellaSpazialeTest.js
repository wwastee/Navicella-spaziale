const Navicella = require('./NavicellaSpaziale')

let deathStar = new Navicella("10km","90km","black",10000,
"cannoni laser di diarrea fumante");

console.log(deathStar.color + " " + deathStar.getSpeed() + deathStar.weapons);
console.log("la deathstar è alta " +    deathStar.height + deathStar.getHeight());