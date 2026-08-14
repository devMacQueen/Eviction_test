
let name = "MacQueen";
let score = 101;
let attendance = 90;

if (score > 100 || attendance > 100) {
    console.log("invaild score or attendance")
} else if (score >= 80 && attendance >= 90) {
    console.log(`name: ${name} grade: Excellent Student `)
} else if (score >= 50 && attendance >= 75) {
    console.log(`Name: ${name} grade: passes`)
} else if (score > 50 && attendance > 50) {
    console.log(`Name: ${name} Grade: passed`)
} else { 
    console.log(`${name} Grade: Failed`)
};
