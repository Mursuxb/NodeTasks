const express = require('express');
const app = express();
app.use(express.json());
const bcrypt = require('bcrypt');

// In-memory storage for user data 
// const users = [];
const users = [
    { username: "sami", password: "Strong#Password#" },
    { username: "rami", password: "Strong#Password#" },
];

// Endpoint for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    // Check if the username is already taken
    if (users.some((user) => user.username === username)) {
        return res.status(400).json({ message: 'Username already taken' });
    }


    // Save the user data (in-memory storage for demonstration)
    users.push({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find((user) => user.username === username);

    if (!user) {
        return res.status(400).json({ message: 'Invalid username' });
    }

    // Check if the password is correct
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'User logged in successfully' });
});


app.get('/users', (req, res) => {
    const userInformation = users.map((user) => {
        return { username: user.username, password: user.password };
    });

    res.status(200).json(userInformation);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});