let raceNumber = Math.floor(Math.random()*2000);
let registeredEarly = Math.floor(Math.random()*2000);
//console.log(a);

//const registeredEarly = false;
//let registeredEarly = a === 1 ? true : false;
const age = 19;
if (registeredEarly = true){
  raceNumber +=1000;
}else{
    raceNumber < 1000;
}
if(registeredEarly && age > 18){
  console.log(`Race will begin at 9:30 AM, your race number is ${raceNumber}`);
}else if(!registeredEarly && age > 18){
  console.log(`Race will beign at 11: 00 AM, your race number is ${raceNumber}`);
}else if(age < 18){
  console.log(`Race will beign at 12: 30 AM, your race number is ${raceNumber}`);
}else{
  console.log('Please contact to registration desck');
}