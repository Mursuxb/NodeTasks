const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = "Admin@123";

/* async function testBcrypt() {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        console.log('Salt: ', salt);
        const hash = await bcrypt.hash(password, salt);
        console.log('Hash: ', hash);
    } catch (err) {
        console.error(err.message);
    }
}

testBcrypt(); */

async function testBcrypt2() {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        console.log('Hash2: ', hash);
    } catch (err) {
        console.error(err.message);
    }
}

testBcrypt2();

// Call the testBcrypt2 function to execute it

async function comparePassword() {
    const inputPassword = 'Admin@123'; // Replace with the password you want to compare
    const hashedPassword = "$2b$10$LZqDrfyTuJC7ioG1iAyNju3czDbyv99If02j0xR0Mhdg3wzvb/1IW"  // Replace with the hashed password you stored earlier
  
    try {
      // Compare the input password with the stored hashed password
      const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
  
      if (isMatch) {
        console.log('Password is correct.');
      } else {
        console.log('Password is incorrect.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function to compare the password
  comparePassword()