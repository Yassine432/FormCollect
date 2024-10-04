const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser');
const bcrypt = require("bcryptjs");
const app = express()

require('dotenv').config()

const corsOptions = {
    origin: ['http://localhost:3000'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

// app security
app.use(helmet())

// Define an array of allowed IP addresses
const allowedIPs = ['192.168.1.100', '192.168.1.101','192.168.1.10'];

const getClientIp = (req) => {
    // Extract IP address from headers
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) {
        // The 'x-forwarded-for' header may contain a comma-separated list of IP addresses
        const ips = forwarded.split(',').map(ip => ip.trim());
        // The client's IP address will be the first address in the list
        return ips[0];
    }
    // If 'x-forwarded-for' header is not present, use the remote address from the request object
    return req.connection.remoteAddress;
};

// Middleware to restrict access based on IP address
const restrictIP = (req, res, next) => {
    const clientIP = getClientIp(req); // Get the client's IP address
    console.log('Client IP:', clientIP);
    next()

    // const clientIP = req.ip; // Get the client's IP address
    // if (allowedIPs.includes(clientIP)) {
    //     // If the client's IP address is in the allowedIPs array, allow access
    //     next();
    // } else {
    //     // If the client's IP address is not in the allowedIPs array, deny access
    //     res.status(403).send('Forbidden');
    // }
};

// Apply the restrictIP middleware to all routes
app.use(restrictIP);

const {connectedToDB} = require('./connection/mongodb')

// database connection
connectedToDB();

// test app
app.get('/', (req, res) => {
    res.send("vanguart")
})

// middlwares
app.use(express.json())
app.use(cookieParser())



const formRouter = require('./routes/route.form')
app.use('/api/V1/form', formRouter)
const port = process.env.PORT || 3000
app.listen(port, () => console.log('\x1b[32m%s\x1b[0m', `app is now listening at port ${port}`))

module.exports = app
