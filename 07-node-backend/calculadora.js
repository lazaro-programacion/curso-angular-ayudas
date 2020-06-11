

console.log("Hola Mundo")

console.log(process.argv);

const op1 = parseInt(process.argv[2]);
const op2 = parseInt(process.argv[3]);

console.log(`
   ${op1} + ${op2} = ${op1 + op2}
   ${op1} * ${op2} = ${op1 * op2}
   ${op1} - ${op2} = ${op1 - op2}
`)