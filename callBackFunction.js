let numbers=[10,15,20,90,125,31,12];
let jami=numbers.reduce((sum, member)=>{
    console.log(`${sum}+${member}`);
    return sum+member;
})
console.log(jami);