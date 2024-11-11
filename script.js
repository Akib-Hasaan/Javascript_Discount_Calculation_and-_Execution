// Discount Calculation and Execution

let actualDam = 80000
if (actualDam >=10000){
    let Discount = actualDam*23.75/100
    let notunDam = actualDam-Discount
    console.log(notunDam); 
}
else{
    console.log(actualDam);
}
