// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package
const jwt = require('jsonwebtoken');
require('crypto').randomBytes(64).toString('hex')
// Your code here

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; 
// DO NOT MODIFY! Re-assign the token variable below.
token = jwt.sign(
    { email: "johnny@gmail.com" }, // payload object
    process.env.SECRET_KEY,        // secret token from .env file
    { expiresIn: '1s' }            // options (example: Token expires in 1 hour)
);


// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.
payload = jwt.decode(token);


// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);
// returns the decoded payload: {"email":"johnny@gmail.com"}

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.
verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);

// Your code here

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// try {
//     let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.
//     verifiedPayload = jwt.verify(token, "wrong secret key");
// }
// catch (err) {
//     console.log(err);
// }

// Your code here

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

// setTimeout(() => {
//     try {
//         let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.
//         verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// , 2000);


// Your code here