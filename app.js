const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What's your name? ", (name) => {
    rl.question("What's your number? ", (number)=>{
        rl.question("What's your email? ", (email)=>{
            console.log(`Hi, ${name}!. Your number is ${number} and your email is ${email}`)
            rl.close();
        })
    })
})
